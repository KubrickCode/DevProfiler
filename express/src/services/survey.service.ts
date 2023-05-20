import { Category } from "../db/db.type";
import SurveyRepository from "../db/repository/survey.repository";

class SurveyService {
  constructor(private surveyRepository: SurveyRepository) {}

  getSurveyService = async (user_id: number) => {
    return await this.surveyRepository.get(user_id);
  };

  createSurveyService = async (
    user_id: number,
    category: Category,
    response: number[]
  ) => {
    return await this.surveyRepository.create(user_id, category, response);
  };

  deleteSurveyService = async (id: number) => {
    return await this.surveyRepository.delete(id);
  };

  updateSurveyService = async (id: number, response: number[]) => {
    return await this.surveyRepository.update(id, response);
  };

  deleteAllByUserId = async (user_id: number) => {
    return await this.surveyRepository.deleteAllByUserId(user_id);
  };
}

export default SurveyService;
