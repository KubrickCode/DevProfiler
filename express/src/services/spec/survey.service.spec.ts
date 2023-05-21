import { createSurveyServiceSuccess } from "./helper/survey/createSurvey.service.helper";
import { deleteSurveyServiceSuccess } from "./helper/survey/deleteSurvey.service.helper";
import { getSurveyServiceSuccess } from "./helper/survey/getSurvey.service.helper";
import { updateSurveyServiceSuccess } from "./helper/survey/updateSurvey.service.helper";

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
