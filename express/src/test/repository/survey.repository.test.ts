import { startServer } from "../..";
import { updateSurveyRepositorySuccess } from "./survey/updateSurvey.repository.helper";
import { deleteSurveyRepositorySuccess } from "./survey/deleteSurvey.repository.helper";
import { createSurveyRepositorySuccess } from "./survey/createSurvey.repository.helper";
import { getSurveyRepositorySuccess } from "./survey/getSurvey.repository.helper";

describe("SurveyRepository", () => {
  let server: any;

  beforeAll(() => {
    server = startServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("createSurveyRepository", () => {
    it("createSurveyRepositorySuccess", createSurveyRepositorySuccess);
  });

  describe("getSurveyRepository", () => {
    it("getSurveyRepositorySuccess", getSurveyRepositorySuccess);
  });

  describe("updateSurveyRepository", () => {
    it("updateSurveyRepositorySuccess", updateSurveyRepositorySuccess);
  });

  describe("deleteSurveyRepository", () => {
    it("deleteSurveyRepositorySuccess", deleteSurveyRepositorySuccess);
  });
});
