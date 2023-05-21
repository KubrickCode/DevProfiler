import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './passport/local.strategy';
import { RedisModule } from '../redis/redis.module';
import { HandlePassword } from '../integrations/handlePassword';
import { GoogleStrategy } from './passport/google.strategy';
import { KakaoStrategy } from './passport/kakao.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule,
    RedisModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    LocalStrategy,
    HandlePassword,
    JwtStrategy,
    GoogleStrategy,
    KakaoStrategy,
  ],
})
export class AuthModule {}
