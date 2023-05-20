import { Category } from "../../../../db.type";
import { surveyRepository } from "../../../../../dependency/survey.dependency";

const createSurveyRepositorySuccess = async () => {
  const mockData = {
    user_id: 1,
    category: "BackEnd" as Category,
    response: Array(25).fill(1),
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

const createSurveyRepositoryFailed = async () => {
  const mockData = {
    user_id: 1,
    category: "DevOps" as Category,
    response: Array(25).fill(1),
  };

  await expect(
    surveyRepository.create(
      mockData.user_id,
      mockData.category,
      mockData.response
    )
  ).rejects.toThrow();
};

export { createSurveyRepositorySuccess, createSurveyRepositoryFailed };
