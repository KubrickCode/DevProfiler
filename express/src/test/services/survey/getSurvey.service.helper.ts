import surveyService from "../../../services/survey.service";

export const getSurveyServiceSuccess = async () => {
  const mockUserId = 42;
  const survey = await surveyService.getSurveyService(mockUserId);

  expect(Array.isArray(survey)).toBeTruthy();
  expect(survey[0].user_id).toEqual(mockUserId);
};
