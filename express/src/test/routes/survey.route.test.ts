import { createSurveyRouteSuccess } from "./survey/createSurvey.route.helper";
import { deleteSurveyRouteSuccess } from "./survey/deleteSurvey.route.helper";
import { updateSurveyRouteSuccess } from "./survey/updateSurvey.route.helper";

describe("/api/survey", () => {
  describe("createSurveyRoute", () => {
    it("createSurveyRouteSuccess", createSurveyRouteSuccess);
  });

  describe("updateSurveyRoute", () => {
    it("updateSurveyRouteSuccess", updateSurveyRouteSuccess);
  });

  describe("deleteSurveyRoute", () => {
    it("deleteSurveyRouteSuccess", deleteSurveyRouteSuccess);
  });
});
