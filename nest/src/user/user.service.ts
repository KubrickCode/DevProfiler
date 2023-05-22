import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { HandlePassword } from '../integrations/handlePassword';
import { SurveyRepository } from '../survey/survey.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly handlePassword: HandlePassword,
    private readonly surveyRepository: SurveyRepository,
  ) {}

  async getUser(email: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('유저 조회 실패');
    }
    return { id: user.id, email: user.email, provider: user.provider };
  }

  async updateUser(id: number, password: string) {
    const hashedPassword = await this.handlePassword.hashPassword(password);
    await this.userRepository.update(id, hashedPassword);
  }

  async deleteUser(id: number) {
    await this.surveyRepository.deleteAllByUserId(id);
    await this.userRepository.delete(id);
  }

  async checkPassword(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      throw new NotFoundException('유저 조회 실패');
    }
    const result = await this.handlePassword.comparePassword(
      password,
      user.password,
    );
    if (!result) {
      throw new NotFoundException('비밀번호가 일치하지 않습니다');
    }
  }
}
