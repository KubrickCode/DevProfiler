import { Survey } from "../db/db.type";
import SurveyRepository from "../db/repository/survey.repository";

class SurveyService {
  async createSurveyService(survey: Survey) {
    await SurveyRepository.create(survey);
  }

  async deleteSurveyService(id: number) {
    await SurveyRepository.delete(id);
  }

  async getAllSurveyService(user_id: number) {
    return await SurveyRepository.getAll(user_id);
  }
}

export default new SurveyService();
