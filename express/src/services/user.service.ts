import HandlePassword from "../integrations/handlePassword";
import { User } from "../db/db.type";
import UserRepository from "../db/repository/user.repository";
import { surveyService } from "../dependency/survey.dependency";

class UserService {
  constructor(
    private userRepository: UserRepository,
    private handlePassword: HandlePassword
  ) {}

  getUserService = async (_email: string) => {
    const result = await this.userRepository.getUserByEmail(_email);
    if (!result) {
      return null;
    }
    const { id, email, provider } = result as User;
    return { id, email, provider };
  };

  updateUserService = async (id: number, password: string) => {
    const hashedPassword = await this.handlePassword.hashPassword(password);
    return await this.userRepository.update(id, hashedPassword);
  };

  deleteUserService = async (id: number) => {
    await surveyService.deleteAllByUserId(id);
    return await this.userRepository.delete(id);
  };

  checkPasswordService = async (email: string, password: string) => {
    const user = await this.userRepository.getUserByEmail(email);
    return await this.handlePassword.comparePassword(password, user?.password!);
  };
}

export default UserService;
