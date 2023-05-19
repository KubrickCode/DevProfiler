import { surveyRepository } from "../../../../../dependency/survey.dependency";

const deleteSurveyRepositorySuccess = async () => {
  const mockId = 13;
  const survey = await surveyRepository.delete(mockId);
  expect(survey.id).toEqual(mockId);
};

export { deleteSurveyRepositorySuccess };
