import { NextFunction, Request, Response } from "express";
import {
  createSurveyRouteFailed,
  createSurveyRouteSuccess,
} from "./helper/survey/createSurvey.route.helper";
import {
  deleteSurveyRouteFailed,
  deleteSurveyRouteSuccess,
} from "./helper/survey/deleteSurvey.route.helper";
import {
  updateSurveyRouteFailed,
  updateSurveyRouteSuccess,
} from "./helper/survey/updateSurvey.route.helper";
import {
  getSurveyRouteFailed,
  getSurveyRouteSuccess,
} from "./helper/survey/getSurvey.route.helper";

jest.mock("../../middlewares/passport", () => ({
  validateJWT: (req: Request, res: Response, next: NextFunction) => {
    req.user = {
      id: 1,
      email: "test@gmail.com",
      provider: "Local",
    };
    next();
  },
  initializePassport: () => ({
    initialize: () => (req: Request, res: Response, next: NextFunction) =>
      next(),
  }),
}));

describe("/api/survey", () => {
  describe("getSurveyRoute", () => {
    it("getSurveyRouteSuccess", getSurveyRouteSuccess);
    it("getSurveyRouteFailed", getSurveyRouteFailed);
  });

  describe("createSurveyRoute", () => {
    it("createSurveyRouteSuccess", createSurveyRouteSuccess);
    it("createSurveyRouteFailed", createSurveyRouteFailed);
  });

  describe("deleteSurveyRoute", () => {
    it("deleteSurveyRouteSuccess", deleteSurveyRouteSuccess);
    it("deleteSurveyRouteFailed", deleteSurveyRouteFailed);
  });

  describe("updateSurveyRoute", () => {
    it("updateSurveyRouteSuccess", updateSurveyRouteSuccess);
    it("updateSurveyRouteFailed", updateSurveyRouteFailed);
  });
});
