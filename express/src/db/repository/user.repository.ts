import { PrismaClient } from "@prisma/client";
import { User } from "../db.type";
const prisma = new PrismaClient();

class UserRepository {
  getUserByEmail = async (email: string) => {
    const result = await prisma.user.findFirst({ where: { email } });
    if (!result) throw "존재하지 않는 계정입니다";
    return result;
  };

  create = async (
    user: Pick<User, "email" | "provider"> & Partial<Pick<User, "password">>
  ) => {
    return await prisma.user.create({
      data: user,
    });
  };

  update = async (id: number, password: string) => {
    return await prisma.user.update({
      where: { id },
      data: { password },
    });
  };

  delete = async (id: number) => {
    return await prisma.user.delete({
      where: { id },
    });
  };
}

export default UserRepository;
