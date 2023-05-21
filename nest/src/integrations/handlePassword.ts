import { Injectable } from '@nestjs/common';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class HandlePassword {
  async hashPassword(password: string): Promise<string> {
    return await bcryptjs.hash(password, 10);
  }

  async comparePassword(
    inputPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcryptjs.compare(inputPassword, hashedPassword);
  }
}
