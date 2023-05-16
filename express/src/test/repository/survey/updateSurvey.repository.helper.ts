import surveyRepository from "../../../db/repository/survey.repository";

export const updateSurveyRepositorySuccess = async () => {
  const mockData = {
    id: 13,
    response: [
      0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
    ],
  };
  const { id, response } = mockData;
  const survey = await surveyRepository.update(id, response);
  expect(survey.id).toEqual(mockData.id);
  expect(survey.response).toEqual(mockData.response);
};
