FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

USER node

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

ENV ADDR=0.0.0.0

EXPOSE 3000

CMD ["npm", "run", "start"]