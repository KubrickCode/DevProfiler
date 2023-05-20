import { Module } from '@nestjs/common';
import { SurveyController } from './survey.controller';
import { SurveyService } from './survey.service';
import { PrismaService } from 'src/prisma.service';
import { SurveyRepository } from './survey.repository';

@Module({
  controllers: [SurveyController],
  providers: [SurveyService, SurveyRepository, PrismaService],
})
export class SurveyModule {}
