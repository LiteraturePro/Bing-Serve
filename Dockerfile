# 编译前端
FROM node:18 as builder
WORKDIR /usr/src/app
RUN git clone https://github.com/LiteraturePro/Bing-Front.git
RUN cd Bing-Front && npm install pnpm -g && pnpm install  && pnpm build

# 编译后端
FROM alpine:latest
WORKDIR /usr/src/app
RUN apk add --no-cache --update nodejs npm tzdata
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' > /etc/timezone
COPY package*.json ./
COPY pnpm-lock.yaml ./
RUN npm install pnpm -g && pnpm install -P
COPY . .
RUN rm -rf dist 
COPY --from=builder /usr/src/app/Bing-Front/dist /usr/src/app/dist

EXPOSE 8080
CMD [ "node", "index.js" ]
