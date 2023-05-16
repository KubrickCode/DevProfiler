import { createClient, RedisClientType } from "redis";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

export let redisClient: RedisClientType = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
  legacyMode: true,
});

export const connectRedis = async () => {
  await redisClient.connect();
  console.log("레디스 연결 완료");
};

export let getAsync: (arg1: string) => Promise<string | null> = promisify(
  redisClient.get
).bind(redisClient);
export let setAsync: (arg1: string, arg2: string) => Promise<unknown> =
  promisify(redisClient.set).bind(redisClient);
export let delAsync: (arg1: string) => Promise<number> = promisify(
  redisClient.del
).bind(redisClient);

export const storeRefreshToken = async (
  userId: number,
  refreshToken: string
) => {
  await setAsync(userId.toString(), refreshToken);
};

export const getRefreshToken = async (userId: number) => {
  return await getAsync(userId.toString());
};

export const revokeRefreshToken = async (userId: number) => {
  await delAsync(userId.toString());
};

export const disconnectRedis = () => {
  redisClient.disconnect();
};
