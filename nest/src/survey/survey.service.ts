import { Injectable, NotFoundException } from '@nestjs/common';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto } from './survey.dto';
import { UpdateSurveyDto } from './survey.dto';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}

  getSurveyService = async (user_id: number) => {
    return await this.surveyRepository.get(user_id);
  };

  async createSurveyService(user_id: number, createSurveyDto: CreateSurveyDto) {
    return await this.surveyRepository.create(user_id, createSurveyDto);
  }

  deleteSurveyService = async (id: number) => {
    const result = await this.surveyRepository.delete(id);
    if (!result) {
      throw new NotFoundException('검사 결과가 없습니다');
    }
  };

  async updateSurveyService(updateSurveyDto: UpdateSurveyDto) {
    const { id, response } = updateSurveyDto;
    const survey = await this.surveyRepository.update({ id, response });
    if (!survey) {
      throw new NotFoundException('검사 결과가 없습니다');
    }
  }
}
