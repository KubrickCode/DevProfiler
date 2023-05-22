import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  Get,
  Response,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './passport/local.guard';
import { UserDto } from '../user/user.dto';
import { RequestUser } from './interfaces/RequestUser.interface';
import { GoogleAuthGuard } from './passport/google.guard';
import { KakaoAuthGuard } from './passport/kakao.guard';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: RequestUser) {
    return this.authService.login(req.user);
  }

  @Post('')
  async join(@Body() userDto: UserDto) {
    return this.authService.join(userDto);
  }

  @Get('refresh')
  async refresh(@Request() req: Request) {
    const refreshToken = req.headers['x-refresh-token'] as string;
    return this.authService.refreshToken(refreshToken);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Request() req: RequestUser, @Response() res: any) {
    res.redirect(
      `${process.env.ORIGIN}/authorize?token=${req.user.token}&refreshToken=${req.user.refreshToken}`,
    );
  }

  @UseGuards(KakaoAuthGuard)
  @Get('kakao/callback')
  async kakaoCallback(@Request() req: RequestUser, @Response() res: any) {
    res.redirect(
      `${process.env.ORIGIN}/authorize?token=${req.user.token}&refreshToken=${req.user.refreshToken}`,
    );
  }
}
