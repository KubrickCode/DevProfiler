import { hashPassword } from "../integrations/handlePassword";
import { User } from "../db/db.type";
import userRepository from "../db/repository/user.repository";

class UserService {
  async createUserService(user: User) {
    const { email, password } = user;
    const hashedPassword = await hashPassword(password);
    await userRepository.create({ email, password: hashedPassword });
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
