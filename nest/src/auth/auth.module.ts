import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './passport/jwt.strategy';
import { UserModule } from '../user/user.module';
import { LocalStrategy } from './passport/local.strategy';
import { RedisModule } from '../redis/redis.module';
import { HandlePassword } from '../integrations/handlePassword';
import { GoogleStrategy } from './passport/google.strategy';
import { KakaoStrategy } from './passport/kakao.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    PassportModule,
    RedisModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<JwtModuleOptions> => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
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
