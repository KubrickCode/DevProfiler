import { PrismaClient } from "@prisma/client";
import { User } from "../db.type";
const prisma = new PrismaClient();

class UserRepository {
  async create(user: User) {
    return await prisma.user.create({
      data: user,
    });
  }

  async update(id: number, password: string) {
    return await prisma.user.update({
      where: { id },
      data: { password },
    });
  }

  async delete(id: number) {
    return await prisma.user.delete({
      where: { id },
    });
  }
}

export default new UserRepository();
