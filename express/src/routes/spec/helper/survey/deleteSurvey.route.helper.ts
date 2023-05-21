import request from "supertest";
import { app } from "../../../..";

import { surveyService } from "../../../../dependency/survey.dependency";

const deleteSurveyRouteSuccess = async () => {
  surveyService.deleteSurveyService = jest.fn().mockResolvedValue(true);
  const res = await request(app).delete("/api/survey/1");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

const deleteSurveyRouteFailed = async () => {
  surveyService.deleteSurveyService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).delete("/api/survey/1");

  expect(res.statusCode).toEqual(403);
  expect(res.body).toHaveProperty("message");
};

export { deleteSurveyRouteSuccess, deleteSurveyRouteFailed };
