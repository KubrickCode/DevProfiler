import { surveyRepository } from "../../../../../dependency/survey.dependency";

const updateSurveyRepositorySuccess = async () => {
  const mockData = {
    id: 14,
    response: Array(25).fill(1),
  };
  const { id, response } = mockData;
  const survey = await surveyRepository.update(id, response);
  expect(survey.id).toEqual(mockData.id);
  expect(survey.response).toEqual(mockData.response);
};

const updateSurveyRepositoryFailed = async () => {
  const mockData = {
    id: 15,
    response: Array(25).fill(1),
  };
  const { id, response } = mockData;
  await expect(surveyRepository.update(id, response)).rejects.toThrow();
};

export { updateSurveyRepositorySuccess, updateSurveyRepositoryFailed };
