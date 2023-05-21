import request from "supertest";
import { app } from "../../../..";

import { surveyService } from "../../../../dependency/survey.dependency";

const updateSurveyRouteSuccess = async () => {
  surveyService.updateSurveyService = jest.fn().mockResolvedValue(true);
  const res = await request(app).patch("/api/survey");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

const updateSurveyRouteFailed = async () => {
  surveyService.updateSurveyService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).patch("/api/survey");

  expect(res.statusCode).toEqual(403);
  expect(res.body).toHaveProperty("message");
};

export { updateSurveyRouteSuccess, updateSurveyRouteFailed };
