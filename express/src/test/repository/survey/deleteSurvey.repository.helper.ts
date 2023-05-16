import surveyRepository from "../../../db/repository/survey.repository";

export const deleteSurveyRepositorySuccess = async () => {
  const mockId = 13;
  const survey = await surveyRepository.delete(mockId);
  expect(survey.id).toEqual(mockId);
};
