import { Category } from "../../../db/db.type";
import { surveyRepository } from "../../../dependency/survey.dependency";

const createSurveyRepositorySuccess = async () => {
  const mockData = {
    user_id: 42,
    category: "FrontEnd" as Category,
    response: [
      1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0,
    ],
  };

  const result = await surveyRepository.create(
    mockData.user_id,
    mockData.category,
    mockData.response
  );

  expect(result.user_id).toEqual(mockData.user_id);
  expect(result.category).toEqual(mockData.category);
  expect(result.response).toEqual(mockData.response);
};

export { createSurveyRepositorySuccess };
