import { surveyService } from "../../../dependency/survey.dependency";

export const deleteSurveyServiceSuccess = async () => {
  const mockId = 12;
  const survey = await surveyService.deleteSurveyService(mockId);

  expect(survey.id).toEqual(mockId);
};
