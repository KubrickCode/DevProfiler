import surveyService from "../../../services/survey.service";

export const deleteSurveyServiceSuccess = async () => {
  const mockId = 12;
  const survey = await surveyService.deleteSurveyService(mockId);

  expect(survey.id).toEqual(mockId);
};
