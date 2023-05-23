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
import {
  ApiHeader,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: '유저 로그인' })
  @Post('login')
  async login(@Request() req: RequestUser) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: '회원가입' })
  @Post('')
  async join(@Body() userDto: UserDto) {
    return this.authService.join(userDto);
  }

  @ApiOperation({ summary: '리프레시 토큰 인증' })
  @ApiHeader({
    name: 'x-refresh-token',
    description: 'JWT 리프레시 토큰',
  })
  @Get('refresh')
  async refresh(@Request() req: Request) {
    const refreshToken = req.headers['x-refresh-token'] as string;
    return this.authService.refreshToken(refreshToken);
  }

  @ApiOperation({ summary: '구글 로그인' })
  @UseGuards(GoogleAuthGuard)
  @ApiOkResponse({
    description: `쿼리스트링으로 토큰과 리프레시토큰값을 담아서 클라이언트로 리디렉션`,
  })
  @Get('google/callback')
  async googleCallback(@Request() req: RequestUser, @Response() res: any) {
    res.redirect(
      `${process.env.ORIGIN}/authorize?token=${req.user.token}&refreshToken=${req.user.refreshToken}`,
    );
  }

  @ApiOperation({ summary: '카카오 로그인' })
  @UseGuards(KakaoAuthGuard)
  @ApiOkResponse({
    description: `쿼리스트링으로 토큰과 리프레시토큰값을 담아서 클라이언트로 리디렉션`,
  })
  @Get('kakao/callback')
  async kakaoCallback(@Request() req: RequestUser, @Response() res: any) {
    res.redirect(
      `${process.env.ORIGIN}/authorize?token=${req.user.token}&refreshToken=${req.user.refreshToken}`,
    );
  }
}
