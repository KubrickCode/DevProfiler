import { Injectable } from '@nestjs/common';
import { SurveyRepository } from './survey.repository';
import { CreateSurveyDto } from './survey.dto';
import { UpdateSurveyDto } from './survey.dto';

@Injectable()
export class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}

  getSurveyService = async (user_id: number) => {
    return await this.surveyRepository.get(user_id);
  };

  createSurveyService = async (survey: CreateSurveyDto) => {
    return await this.surveyRepository.create(survey);
  };

  deleteSurveyService = async (id: number) => {
    return await this.surveyRepository.delete(id);
  };

  updateSurveyService = async (survey: UpdateSurveyDto) => {
    return await this.surveyRepository.update(survey);
  };

  deleteAllByUserId = async (user_id: number) => {
    return await this.surveyRepository.deleteAllByUserId(user_id);
  };
}
