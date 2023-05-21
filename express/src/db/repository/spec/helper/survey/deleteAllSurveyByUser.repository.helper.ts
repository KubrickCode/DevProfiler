import { surveyRepository } from "../../../../../dependency/survey.dependency";

const deleteAllSurveyByUserRepositorySuccess = async () => {
  const mockUserId = 1;
  const result = await surveyRepository.deleteAllByUserId(mockUserId);
  expect(result.count).toBeLessThan(3);
};

export { deleteAllSurveyByUserRepositorySuccess };
