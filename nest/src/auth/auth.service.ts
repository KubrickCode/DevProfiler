import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../user/user.repository';
import { comparePassword, hashPassword } from '../integrations/handlePassword';
import { UserDto } from '../user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  validateUser = async (email: string, password: string): Promise<any> => {
    const user = await this.userRepository.getUserByEmail(email);
    if (user && (await comparePassword(password, user.password))) {
      return { id: user.id, email: user.email };
    }
    return null;
  };

  login = async (user: any) => {
    const payload = { username: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  };

  join = async (user: UserDto) => {
    const hashedPassword = await hashPassword(user.password);
    const result = await this.userRepository.create(
      user.email,
      'Local',
      hashedPassword,
    );
    const payload = { username: result.email, sub: result.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  };
}
