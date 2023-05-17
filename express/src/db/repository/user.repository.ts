import { PrismaClient } from "@prisma/client";
import { User } from "../db.type";
const prisma = new PrismaClient();

class UserRepository {
  getUserByEmail = async (email: string) => {
    return await prisma.user.findFirst({ where: { email } });
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
