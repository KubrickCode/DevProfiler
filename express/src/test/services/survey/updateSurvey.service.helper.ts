import { surveyService } from "../../../dependency/survey.dependency";

const updateSurveyServiceSuccess = async () => {
  const mockData = {
    id: 13,
    response: [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ],
  };
  const { id, response } = mockData;
  const survey = await surveyService.updateSurveyService(id, response);
  expect(survey.id).toEqual(mockData.id);
  expect(survey.response).toEqual(mockData.response);
};

export { updateSurveyServiceSuccess };
