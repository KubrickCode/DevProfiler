import { comparePassword, hashPassword } from "../integrations/handlePassword";
import { User } from "../db/db.type";
import UserRepository from "../db/repository/user.repository";
import HandleLogin from "../integrations/handleLogin";
import surveyRepository from "../db/repository/survey.repository";

class UserService {
  constructor(
    private userRepository: UserRepository,
    private handleLogin: HandleLogin
  ) {}

  async getUserService(_email: string) {
    const result = await this.userRepository.getUserByEmail(_email);
    const { id, email } = result as User;
    return { id, email };
  }

  async loginService(email: string, password: string) {
    return await this.handleLogin.loginAuthenticate(email, password);
  }

  async refreshTokenService(refreshToken: string) {
    return await this.handleLogin.verifyRefreshToken(refreshToken);
  }

  async createUserService(user: Omit<User, "id">) {
    const { email, password } = user;
    const isExistUser = await this.userRepository.getUserByEmail(email);
    if (isExistUser) return { message: "이미 존재하는 이메일입니다" };
    const hashedPassword = await hashPassword(password);
    await this.userRepository.create({
      email,
      password: hashedPassword,
    });
    return await this.handleLogin.loginAuthenticate(email, password);
  }

  async updateUserService(id: number, password: string) {
    const hashedPassword = await hashPassword(password);
    return await this.userRepository.update(id, hashedPassword);
  }

  async deleteUserService(id: number) {
    await surveyRepository.deleteAllByUserId(id);
    return await this.userRepository.delete(id);
  }

  async checkPasswordService(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    return await comparePassword(password, user?.password as string);
  }
}

export default UserService;
