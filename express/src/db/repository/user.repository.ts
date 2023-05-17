import { PrismaClient } from "@prisma/client";
import { User } from "../db.type";
const prisma = new PrismaClient();

class UserRepository {
  async getUserByEmail(email: string) {
    return await prisma.user.findFirst({ where: { email } });
  }

  async create(user: Omit<User, "id">) {
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

export default UserRepository;
