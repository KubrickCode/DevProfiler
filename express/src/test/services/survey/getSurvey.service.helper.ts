import { surveyService } from "../../../dependency/survey.dependency";

const getSurveyServiceSuccess = async () => {
  const mockUserId = 42;
  const survey = await surveyService.getSurveyService(mockUserId);

  expect(Array.isArray(survey)).toBeTruthy();
  expect(survey[0].user_id).toEqual(mockUserId);
};

export { getSurveyServiceSuccess };
