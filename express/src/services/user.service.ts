import { hashPassword } from "../integrations/handlePassword";
import { User } from "../db/db.type";
import userRepository from "../db/repository/user.repository";
import {
  loginAuthenticate,
  verifyRefreshToken,
} from "../integrations/handleLogin";

class UserService {
  async getUserService(_email: string) {
    const result = await userRepository.getUserByEmail(_email);
    const { id, email } = result as User;
    return { id, email };
  }

  async loginService(email: string, password: string) {
    return await loginAuthenticate(email, password);
  }

  async refreshTokenService(refreshToken: string) {
    return await verifyRefreshToken(refreshToken);
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
    return await userRepository.update(id, hashedPassword);
  }

  async deleteUserService(id: number) {
    return await userRepository.delete(id);
  }
}

export default new UserService();
