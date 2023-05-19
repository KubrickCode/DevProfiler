FROM node:18.16.0-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

RUN yarn global add pm2

COPY . .

RUN yarn prisma generate

RUN yarn build

CMD ["pm2-runtime", "start", "dist"]
