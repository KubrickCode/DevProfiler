import { hashPassword } from "../integrations/handlePassword";
import { User } from "../db/db.type";
import userRepository from "../db/repository/user.repository";
import { loginAuthenticate } from "../integrations/handleLogin";

class UserService {
  async login(email: string, password: string) {
    return await loginAuthenticate(email, password);
  }

  async createUserService(user: Omit<User, "id">) {
    const { email, password } = user;
    const isExistUser = await userRepository.getUserByEmail(email);
    if (isExistUser) return { message: "이미 존재하는 이메일입니다" };
    const hashedPassword = await hashPassword(password);
    await userRepository.create({
      email,
      password: hashedPassword,
    });
    return await loginAuthenticate(email, password);
  }

  async updateUserService(id: number, password: string) {
    const hashedPassword = await hashPassword(password);
    await userRepository.update(id, hashedPassword);
  }

  async deleteUserService(id: number) {
    await userRepository.delete(id);
  }
}

export default new UserService();
