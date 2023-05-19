import { surveyRepository } from "../../../dependency/survey.dependency";

const getSurveyRepositorySuccess = async () => {
  const mockUserId = 39;
  const result = await surveyRepository.get(mockUserId);
  expect(result[0].user_id).toEqual(mockUserId);
};

export { getSurveyRepositorySuccess };
