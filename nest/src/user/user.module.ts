import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';
import { UserRepository } from './user.repository';
import { HandlePassword } from '../integrations/handlePassword';
import { SurveyRepository } from '../survey/survey.repository';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    PrismaService,
    HandlePassword,
    SurveyRepository,
  ],
  exports: [UserRepository],
})
export class UserModule {}
