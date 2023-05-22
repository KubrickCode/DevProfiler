import {
  Controller,
  Get,
  Patch,
  Delete,
  Body,
  Req,
  UseGuards,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/passport/jwt.guard';
import { RequestUser } from '../auth/interfaces/RequestUser.interface';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetUserResponse } from '../swagger/user.swagger';
import { UpdateUserDto } from './user.dto';

@ApiTags('User')
@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: '유저 정보 제공' })
  @ApiResponse(GetUserResponse)
  async getUser(@Req() req: RequestUser) {
    const result = await this.userService.getUser(req.user.email);
    return result;
  }

  @ApiOperation({ summary: '유저 정보 업데이트' })
  @ApiBody({
    description: '업데이트 요청 정보',
    type: UpdateUserDto,
  })
  @Patch()
  async updateUser(
    @Req() req: RequestUser,
    @Body('password') password: string,
  ) {
    await this.userService.updateUser(req.user.id, password);
    return { message: '유저 정보 업데이트 성공' };
  }

  @Delete()
  async deleteUser(@Req() req: RequestUser) {
    await this.userService.deleteUser(req.user.id);
    return { message: '유저 삭제 성공' };
  }

  @Post('check-password')
  async checkPassword(
    @Req() req: RequestUser,
    @Body('password') password: string,
  ) {
    await this.userService.checkPassword(req.user.email, password);
    return { message: '비밀번호 확인 성공' };
  }
}
