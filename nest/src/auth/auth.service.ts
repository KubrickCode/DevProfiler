import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../integrations/handlePassword';
import { UserDto } from '../user/user.dto';
import { RedisService } from '../redis/redis.service';
import { DecodedToken } from './interfaces/DecodeToken.interface';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private redisService: RedisService,
    private readonly handlePassword: HandlePassword,
  ) {}

  validateUser = async (
    email: string,
    password: string,
  ): Promise<Pick<User, 'id' | 'email'>> => {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('존재하지 않는 계정입니다');
    }

    const isPasswordCorrect = await this.handlePassword.comparePassword(
      password,
      user.password,
    );

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('비밀번호가 일치하지 않습니다');
    }

    return { id: user.id, email: user.email };
  };

  login = async (user: Pick<User, 'id' | 'email'>) => {
    console.log('Secret at login method:', process.env.JWT_SECRET);
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
    await this.redisService.set(
      `refresh_token:${user.id}`,
      refreshToken,
      60 * 60 * 24 * 14,
    );

    return { token, refreshToken };
  };

  join = async (user: UserDto) => {
    const existingUser = await this.userRepository.getUserByEmail(user.email);
    if (existingUser) {
      throw new UnauthorizedException('이미 존재하는 이메일입니다');
    }

    const hashedPassword = await this.handlePassword.hashPassword(
      user.password,
    );
    const result = await this.userRepository.create(
      user.email,
      'Local',
      hashedPassword,
    );
    const payload = { username: result.email, sub: result.id };
    const token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
    await this.redisService.set(
      `refresh_token:${result.id}`,
      refreshToken,
      60 * 60 * 24 * 14,
    );

    return { token, refreshToken };
  };

  refreshToken = async (token: string) => {
    let decoded: DecodedToken;
    try {
      decoded = this.jwtService.decode(token) as DecodedToken;
    } catch (err) {
      throw new UnauthorizedException('유효하지 않은 토큰');
    }

    if (!decoded || !decoded.sub || !decoded.username) {
      throw new UnauthorizedException('유효하지 않은 토큰');
    }

    const storedToken = await this.redisService.get(
      `refresh_token:${decoded.sub}`,
    );

    if (storedToken === null) {
      throw new UnauthorizedException('토큰 만료');
    }
    if (storedToken !== token) {
      throw new UnauthorizedException('유효하지 않은 토큰');
    }

    const payload = { username: decoded.username, sub: decoded.sub };
    const newToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    return { token: newToken };
  };

  googleLogin = async (profile: any): Promise<any> => {
    const email = profile._json.email;

    const user = await this.userRepository.getUserByEmail(email);
    if (user) {
      const payload = { username: user.email, sub: user.id };
      const token = this.jwtService.sign(payload, { expiresIn: '1h' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
      await this.redisService.set(
        `refresh_token:${user.id}`,
        refreshToken,
        60 * 60 * 24 * 14,
      );
      return { token, refreshToken };
    } else {
      const newUser = await this.userRepository.create(email, 'Google', '');
      const payload = { username: newUser.email, sub: newUser.id };
      const token = this.jwtService.sign(payload, { expiresIn: '1h' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
      await this.redisService.set(
        `refresh_token:${newUser.id}`,
        refreshToken,
        60 * 60 * 24 * 14,
      );

      return { token, refreshToken };
    }
  };

  kakaoLogin = async (profile: any): Promise<any> => {
    const email = profile.id + '@kakao.com';

    const user = await this.userRepository.getUserByEmail(email);
    if (user) {
      const payload = { username: user.email, sub: user.id };
      const token = this.jwtService.sign(payload, { expiresIn: '1h' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
      await this.redisService.set(
        `refresh_token:${user.id}`,
        refreshToken,
        60 * 60 * 24 * 14,
      );

      return { token, refreshToken };
    } else {
      const newUser = await this.userRepository.create(email, 'Kakao', '');
      const payload = { username: newUser.email, sub: newUser.id };
      const token = this.jwtService.sign(payload, { expiresIn: '1h' });
      const refreshToken = this.jwtService.sign(payload, { expiresIn: '2w' });
      await this.redisService.set(
        `refresh_token:${newUser.id}`,
        refreshToken,
        60 * 60 * 24 * 14,
      );

      return { token, refreshToken };
    }
  };
}
