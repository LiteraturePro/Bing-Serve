FROM alpine:latest

WORKDIR /usr/src/app

RUN apk add --no-cache --update nodejs npm tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone
COPY * ./
RUN npm install pnpm -g && pnpm install -P
EXPOSE 8080
CMD [ "node", "/usr/src/app/index.js" ]
