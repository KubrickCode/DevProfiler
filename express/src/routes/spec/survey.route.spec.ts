import { createSurveyRouteSuccess } from "./helper/survey/createSurvey.route.helper";
import { deleteSurveyRouteSuccess } from "./helper/survey/deleteSurvey.route.helper";
import { updateSurveyRouteSuccess } from "./helper/survey/updateSurvey.route.helper";

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
