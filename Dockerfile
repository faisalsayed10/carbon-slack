FROM node:18.16.1-alpine

RUN apk add --no-cache git

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install --production=false

COPY . .

RUN yarn build

ENV NODE_ENV production
ENV PORT 80
EXPOSE 80

CMD ["node", "dist/index.js"]
