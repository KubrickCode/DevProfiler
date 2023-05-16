// user.repository.test.ts
import surveyRepository from "../../db/repository/survey.repository";
import { startServer } from "../../app";
import { updateSurveyRepositorySuccess } from "./survey/updateSurvey.repository.helper";

describe("SurveyRepository", () => {
  let server: any;

  beforeAll(() => {
    server = startServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  it("createSurveyRepository", async () => {
    const mockData = {
      user_id: 39,
      category: "FrontEnd",
      response: [
        1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, 2, 3, 4,
        0,
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
  });

  it("getSurveyRepository", async () => {
    const mockUserId = 39;
    const result = await surveyRepository.get(mockUserId);
    expect(result[0].user_id).toEqual(mockUserId);
  });

  it("deleteSurveyRepository", async () => {
    const mockId = 4;
    const result = await surveyRepository.delete(mockId);
    expect(result.id).toEqual(mockId);
  });

  describe("updateSurveyRepository", () => {
    it("updateSurveyRepositorySuccess", updateSurveyRepositorySuccess);
  });
});
