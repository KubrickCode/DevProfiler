import request from "supertest";
import { app } from "../../../..";

import { surveyService } from "../../../../dependency/survey.dependency";

const createSurveyRouteSuccess = async () => {
  surveyService.createSurveyService = jest.fn().mockResolvedValue(true);

  const res = await request(app).post("/api/survey");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

const createSurveyRouteFailed = async () => {
  surveyService.createSurveyService = jest.fn().mockRejectedValue(new Error());

  const res = await request(app).post("/api/survey");

  expect(res.statusCode).toEqual(403);
  expect(res.body).toHaveProperty("message");
};

export { createSurveyRouteSuccess, createSurveyRouteFailed };
