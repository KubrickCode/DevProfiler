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

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUser(@Req() req: RequestUser) {
    const result = await this.userService.getUser(req.user.email);
    return result;
  }

  @Patch()
  async updateUser(
    @Req() req: RequestUser,
    @Body('password') password: string,
  ) {
    await this.userService.updateUser(req.user.id, password);
    return { message: 'User updated successfully' };
  }

  @Delete()
  async deleteUser(@Req() req: RequestUser) {
    await this.userService.deleteUser(req.user.id);
    return { message: 'User deleted successfully' };
  }

  @Post('check-password')
  async checkPassword(
    @Req() req: RequestUser,
    @Body('password') password: string,
  ) {
    await this.userService.checkPassword(req.user.email, password);
    return { message: 'Password verification successful' };
  }
}
