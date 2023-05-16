import SurveyRepository from "../db/repository/survey.repository";

class SurveyService {
  async createSurveyService(
    user_id: number,
    category: string,
    response: number[]
  ) {
    return await SurveyRepository.create(user_id, category, response);
  }

  async deleteSurveyService(id: number) {
    return await SurveyRepository.delete(id);
  }

  async getSurveyService(user_id: number) {
    return await SurveyRepository.get(user_id);
  }

  async updateSurveyService(id: number, response: number[]) {
    return await SurveyRepository.update(id, response);
  }
}

export default new SurveyService();
