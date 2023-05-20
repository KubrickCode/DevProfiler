import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateSurveyDto, UpdateSurveyDto } from './survey.dto';

@Injectable()
export class SurveyRepository {
  constructor(private prisma: PrismaService) {}

  create = async (surveyData: CreateSurveyDto) => {
    const { user_id, category, response } = surveyData;
    return await this.prisma.survey.create({
      data: { user_id, category, response },
    });
  };

  delete = async (id: number) => {
    return await this.prisma.survey.delete({
      where: { id },
    });
  };

  deleteAllByUserId = async (user_id: number) => {
    return await this.prisma.survey.deleteMany({ where: { user_id } });
  };

  get = async (user_id: number) => {
    return await this.prisma.survey.findMany({
      where: { user_id },
    });
  };

  update = async (surveyData: UpdateSurveyDto) => {
    const { id, response } = surveyData;
    return await this.prisma.survey.update({
      where: {
        id,
      },
      data: {
        response,
      },
    });
  };
}
