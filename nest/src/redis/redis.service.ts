import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit {
  private client: Redis;

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    this.client = new Redis({
      host: this.configService.get<string>('REDIS_HOST'),
      port: this.configService.get<number>('REDIS_PORT'),
      password: this.configService.get<string>('REDIS_PASSWORD'),
    });
  }

  async set(key: string, value: any, ttl: number) {
    await this.client.set(key, JSON.stringify(value), 'EX', ttl);
  }

  async get(key: string) {
    const data = await this.client.get(key);
    return data ? JSON.parse(data) : null;
  }

  async delete(key: string) {
    await this.client.del(key);
  }
}
