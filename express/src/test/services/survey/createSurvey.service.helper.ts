import { Category } from "../../../db/db.type";
import { surveyService } from "../../../dependency/survey.dependency";

const createSurveyServiceSuccess = async () => {
  const mockData = {
    user_id: 42,
    category: "FrontEnd",
    response: [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
    ],
  };
  const { user_id, category, response } = mockData;
  const survey = await surveyService.createSurveyService(
    user_id,
    category as Category,
    response
  );
  expect(survey.user_id).toEqual(mockData.user_id);
  expect(survey.category).toEqual(mockData.category);
  expect(survey.response).toEqual(mockData.response);
};

export { createSurveyServiceSuccess };
