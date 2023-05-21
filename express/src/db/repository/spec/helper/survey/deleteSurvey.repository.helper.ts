import { surveyRepository } from "../../../../../dependency/survey.dependency";

const deleteSurveyRepositorySuccess = async () => {
  const mockId = 13;
  const survey = await surveyRepository.delete(mockId);
  expect(survey.id).toEqual(mockId);
};

const deleteSurveyRepositoryFailed = async () => {
  const mockId = 13;
  await expect(surveyRepository.delete(mockId)).rejects.toThrow();
};

export { deleteSurveyRepositorySuccess, deleteSurveyRepositoryFailed };
