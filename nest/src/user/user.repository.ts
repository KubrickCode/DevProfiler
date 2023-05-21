import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Provider } from '@prisma/client';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  create = async (email: string, provider: Provider, password?: string) => {
    return await this.prisma.user.create({
      data: { email, password, provider },
    });
  };

  getUserByEmail = async (email: string) => {
    return await this.prisma.user.findFirst({ where: { email } });
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
