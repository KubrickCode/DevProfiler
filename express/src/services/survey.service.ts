import { Survey } from "../db/db.type";
import SurveyRepository from "../db/repository/survey.repository";

class SurveyService {
  async createSurveyService(
    user_id: number,
    category: string,
    response: number[]
  ) {
    await SurveyRepository.create(user_id, category, response);
  }

  async deleteSurveyService(id: number) {
    await SurveyRepository.delete(id);
  }

  async getSurveyService(user_id: number) {
    return await SurveyRepository.get(user_id);
  }
}

export default new SurveyService();
