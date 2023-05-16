// user.service.test.ts
import { createSurveyServiceSuccess } from "./survey/createSurvey.service.helper";
import { deleteSurveyServiceSuccess } from "./survey/deleteSurvey.service.helper";
import { getSurveyServiceSuccess } from "./survey/getSurvey.service.helper";
import { updateSurveyServiceSuccess } from "./survey/updateSurvey.service.helper";

describe("SurveyService", () => {
  describe("getSurveyService", () => {
    it("getSurveyServiceSuccess", getSurveyServiceSuccess);
  });

  describe("createSurveyService", () => {
    it("createSurveyServiceSuccess", createSurveyServiceSuccess);
  });

  describe("deleteSurveyService", () => {
    it("deleteSurveyServiceSuccess", deleteSurveyServiceSuccess);
  });

  describe("updateSurveyService", () => {
    it("updateSurveyServiceSuccess", updateSurveyServiceSuccess);
  });
});
