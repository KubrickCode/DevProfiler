import { surveyRepository } from "../../../../../dependency/survey.dependency";

const getSurveyRepositorySuccess = async () => {
  const mockUserId = 1;
  const result = await surveyRepository.get(mockUserId);
  expect(result[0].user_id).toEqual(mockUserId);
};

const getSurveyRepositoryFailed = async () => {
  const mockUserId = 2;
  const result = await surveyRepository.get(mockUserId);
  expect(result.length).toEqual(0);
};

export { getSurveyRepositorySuccess, getSurveyRepositoryFailed };
