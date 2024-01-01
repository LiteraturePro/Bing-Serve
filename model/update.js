// 新增/更新图片

// 导入配置文件
const {
  installConfig,
  apiBaseConfig,
} = require("../config/config");
const { baseConfig } = require("../data/config");

// 初始化配置项
const retryTimeout = baseConfig.retryTimeout || 10000;
const { dir, databaseTable } = installConfig;
const { static } = apiBaseConfig;

// 导入模块
const {
  processImageGrey,
  processImageGauss,
  processImageResize,
  getImageBase64,
  getImageMainColor,
} = require("./processImage"); // 图片处理模块
const { logger } = require("./log4js"); // 日志模块
const { operateDb } = require("./conn"); // 数据库模块
const { getBingJson } = require("./request"); // 请求外部接口模块
const { createDirectorySync, downloadImageSync } = require("./fileOperations"); // 文件操作模块
const { eventBus } = require("./eventBus"); // 事件总线

// 第三方模块
const dayjs = require("dayjs");

const fs = require('fs');
const path = require('path');
const { 
  S3Client,
  ListBucketsCommand,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand
} = require("@aws-sdk/client-s3");

const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");


const S3 = new S3Client({
  region: "auto",
  endpoint: `https://e680e4488fdd6d1b8c827cba29dc3410.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: '53d739971d303ddc199d8b60aed08d6b',
    secretAccessKey: 'afca119a42b5219ecd7b7b9f5ebafada303a6c1a7fb7d0b877c4b0469fa1eb3a',
  },
});

// 错误收集器
let errorList = []; // 错误列表
let retryTime = 0; // 重试次数
eventBus.on("on-error", (error) => {
  errorList.push(error);
});

// 并发处理图片
const processImage = function (saveDir) {
  processImageGrey(saveDir, { quality: 90 });
  processImageResize(saveDir, {
    width: 480,
    height: 270,
    quality: 90,
  });
  processImageGauss(saveDir, { pixels: 20, quality: 90 });
};

// 新增/更新
const updateBing = async function () {

  const saveDir = `${dir}/${dayjs().format("YYYY")}/${dayjs().format(
    "MM"
  )}/${dayjs().format("DD")}`;
  logger.info("当前时间: " + dayjs());
  logger.info("保存目录: " + saveDir);
  // 获取bing官方数据
  let bingJson = await getBingJson();
  // 校验bingJson
  if (!(bingJson.images && bingJson.images[0])) {
    return retry();
  }
  // 创建目录
  await createDirectorySync(saveDir, true);
  // 下载图片
  await downloadImageSync(
    "https://cn.bing.com" + bingJson.images[0].url,
    `${saveDir}/${dayjs().format("YYYY-MM-DD")}_hd.jpg`
  );
  await downloadImageSync(
    "https://cn.bing.com" + bingJson.images[0].urlbase + "_UHD.jpg",
    `${saveDir}/${dayjs().format("YYYY-MM-DD")}_uhd.jpg`
  );
  // 处理图片
  processImage(saveDir);

  // 同步目录到 S3
  syncDirectoryToS3(saveDir, `BingCdn/${dayjs().format("YYYY")}/${dayjs().format(
    "MM"
  )}/${dayjs().format("DD")}`)
    .then(() => {
      console.log('同步S3完成啦!');
    })
    .catch((error) => {
      console.error('同步S3失败咯', error);
  });

  // 变量准备
  const mainColor = await getImageMainColor(saveDir);
  const imageBase64 = await getImageBase64(saveDir, {
    width: 16,
    height: 9,
    quality: 90,
  });
  const baseImgUrl = `https://jscdn.cachefly.net/BingCdn/${dayjs().format("YYYY")}/${dayjs().format("MM")}/${dayjs().format("DD")}/${dayjs().format("YYYY-MM-DD")}`;
  const urlObj = {
    hd: `${baseImgUrl}_hd.jpg`,
    uhd: `${baseImgUrl}_uhd.jpg`,
    greyscale: `${baseImgUrl}_hd_greyscale.jpg`,
    thumbnail: `${baseImgUrl}_hd_thumbnail_480_270.jpg`,
    gaussian: `${baseImgUrl}_hd_gaussian_20.jpg`,
  };
  const SQL_CHECK = `SELECT * FROM ${databaseTable}
    WHERE date='${dayjs().format("YYYY-MM-DD")}'`;
  const SQL_INSERT = `
        INSERT INTO ${databaseTable}
          (title, copyright, date, base64, url, color)
        VALUES
          ('${bingJson.images[0].title}',
          '${bingJson.images[0].copyright}',
          '${dayjs().format("YYYY-MM-DD")}',
          '${imageBase64}',
          '${JSON.stringify(urlObj)}',
          '${JSON.stringify(mainColor)}');
    `;
  const SQL_UPDATE = `
        UPDATE ${databaseTable} SET
          title='${bingJson.images[0].title}',
          copyright='${bingJson.images[0].copyright}',
          base64='${imageBase64}',
          url='${JSON.stringify(urlObj)}',
          color='${JSON.stringify(mainColor)}'
        WHERE date='${dayjs().format("YYYY-MM-DD")}'
    `;
  // 写入数据库
  if ((await operateDb(SQL_CHECK, null)).data.length === 0) {
    await operateDb(SQL_INSERT, null).then((result) => {
      logger.info("数据库-写入成功");
    });
  } else {
    await operateDb(SQL_UPDATE, null).then((result) => {
      logger.info("数据库-更新成功");
    });
  }
  // 重试逻辑
  if (errorList.length === 0) {
    logger.info("成功");
    // res.send("成功");
  } else {
    retry();
  }
};

// 递归遍历本地目录并上传文件
async function syncDirectoryToS3(localPath, s3Path) {
  console.log(
    await S3.send(
      new ListBucketsCommand('')
    )
  );
  // console.log(
  //   await S3.send(
  //     new ListObjectsV2Command({ Bucket: 'oss' })
  //   )
  // );

  const files = fs.readdirSync(localPath);

  for (const file of files) {
    const filePath = path.join(localPath, file);
    const s3Key = path.join(s3Path, file);

    if (fs.statSync(filePath).isDirectory()) {
      await syncDirectoryToS3(filePath, s3Key);
    } else {
      try {
        const fileStream = fs.createReadStream(filePath);
        const uploadParams = {
          Bucket: 'oss',
          Key: s3Key,
          Body: fileStream
        };

        const response = await S3.send(new PutObjectCommand(uploadParams));
        console.log('图像上传成功:', response);

      } catch (error) {
        console.error('图像上传失败:', error);
      }
    }
  }
};


const retry = () => {
  if (retryTime >= 10) {
    retryTime = 0;
    logger.error("失败 " + errorList);
    return;
  }
  retryTime++;
  logger.error("发生了错误,正在重试中 次数: " + retryTime);
  errorList = [];
  setTimeout(function () {
    updateBing();
  }, retryTimeout * retryTime);
}

// run
updateBing();

