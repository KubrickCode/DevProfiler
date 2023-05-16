import { deleteSurveyRouteSuccess } from "./survey/deleteSurvey.route.helper";
import { updateSurveyRouteSuccess } from "./survey/updateSurvey.route.helper";

describe("/api/survey", () => {
  describe("updateSurveyRoute", () => {
    it("updateSurveyRouteSuccess", updateSurveyRouteSuccess);
  });

  describe.only("deleteSurveyRoute", () => {
    it("deleteSurveyRouteSuccess", deleteSurveyRouteSuccess);
  });
});
