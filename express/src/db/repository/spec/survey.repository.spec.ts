import {
  updateSurveyRepositoryFailed,
  updateSurveyRepositorySuccess,
} from "./helper/survey/updateSurvey.repository.helper";
import {
  deleteSurveyRepositoryFailed,
  deleteSurveyRepositorySuccess,
} from "./helper/survey/deleteSurvey.repository.helper";
import {
  createSurveyRepositoryFailed,
  createSurveyRepositorySuccess,
} from "./helper/survey/createSurvey.repository.helper";
import {
  getSurveyRepositoryFailed,
  getSurveyRepositorySuccess,
} from "./helper/survey/getSurvey.repository.helper";
import { deleteAllSurveyByUserRepositorySuccess } from "./helper/survey/deleteAllSurveyByUser.repository.helper";

describe("SurveyRepository", () => {
  describe("createSurveyRepository", () => {
    it("createSurveyRepositorySuccess", createSurveyRepositorySuccess);
    it("createSurveyRepositoryFailed", createSurveyRepositoryFailed);
  });

  describe("getSurveyRepository", () => {
    it("getSurveyRepositorySuccess", getSurveyRepositorySuccess);
    it("getSurveyRepositoryFailed", getSurveyRepositoryFailed);
  });

  describe("updateSurveyRepository", () => {
    it("updateSurveyRepositorySuccess", updateSurveyRepositorySuccess);
    it("updateSurveyRepositoryFailed", updateSurveyRepositoryFailed);
  });

  describe("deleteSurveyRepository", () => {
    it("deleteSurveyRepositorySuccess", deleteSurveyRepositorySuccess);
    it("deleteSurveyRepositoryFailed", deleteSurveyRepositoryFailed);
  });

  describe("deleteAllSurveyByUserRepository", () => {
    it(
      "deleteAllSurveyByUserRepositorySuccess",
      deleteAllSurveyByUserRepositorySuccess
    );
  });
});
