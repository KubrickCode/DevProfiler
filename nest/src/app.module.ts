import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SurveyModule } from './survey/survey.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    AuthModule,
    SurveyModule,
    UserModule,
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
    }),
    RedisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
