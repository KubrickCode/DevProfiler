import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Provider } from '@prisma/client';

@Injectable()
export class AuthRepository {
  constructor(private prisma: PrismaService) {}

  getUserByEmail = async (email: string) => {
    const result = await this.prisma.user.findFirst({ where: { email } });
    if (!result) throw new Error('존재하지 않는 계정입니다');
    return result;
  };

  create = async (email: string, provider: Provider, password?: string) => {
    return await this.prisma.user.create({
      data: { email, password, provider },
    });
  };

  update = async (id: number, password: string) => {
    return await this.prisma.user.update({
      where: { id },
      data: { password },
    });
  };

  delete = async (id: number) => {
    return await this.prisma.user.delete({
      where: { id },
    });
  };
}
