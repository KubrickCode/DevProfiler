import { createClient, RedisClientType } from "redis";
import { promisify } from "util";
import dotenv from "dotenv";

dotenv.config();

class RedisClient {
  private client: RedisClientType;
  private getAsync: (arg1: string) => Promise<string | null>;
  private setAsync: (arg1: string, arg2: string) => Promise<unknown>;
  private delAsync: (arg1: string) => Promise<number>;

  constructor() {
    this.client = createClient({
      password: process.env.REDIS_PASSWORD,
      socket: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
      legacyMode: true,
    });

    this.getAsync = promisify(this.client.get).bind(this.client);
    this.setAsync = promisify(this.client.set).bind(this.client);
    this.delAsync = promisify(this.client.del).bind(this.client);
  }

  connect = async () => {
    await this.client.connect();
    console.log("레디스 연결 완료");
  };

  storeRefreshToken = async (userId: number, refreshToken: string) => {
    await this.setAsync(userId.toString(), refreshToken);
  };

  getRefreshToken = async (userId: number) => {
    return await this.getAsync(userId.toString());
  };

  revokeRefreshToken = async (userId: number) => {
    await this.delAsync(userId.toString());
  };

  disconnect() {
    this.client.disconnect();
  }
}

export default RedisClient;
