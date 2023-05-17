import { surveyService } from "../../../dependency/survey.dependency";

export const getSurveyServiceSuccess = async () => {
  const mockUserId = 42;
  const survey = await surveyService.getSurveyService(mockUserId);

  expect(Array.isArray(survey)).toBeTruthy();
  expect(survey[0].user_id).toEqual(mockUserId);
};
