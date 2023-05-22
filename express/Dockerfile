FROM node:18.16.0

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
