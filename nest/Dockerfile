FROM node:18.16.0

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY prisma ./prisma/

RUN yarn prisma generate

COPY . .

EXPOSE 3000
EXPOSE 5555

CMD ["sh", "-c", "yarn prisma migrate deploy && yarn dev & yarn studio"]
