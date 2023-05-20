import request from "supertest";
import { app } from "../../../..";

import { surveyService } from "../../../../dependency/survey.dependency";
import { Survey } from "../../../../db/db.type";

const surveyMockData: Survey[] = [
  { user_id: 1, category: "FrontEnd", response: Array(25).fill(1) },
  { user_id: 2, category: "BackEnd", response: Array(25).fill(1) },
];

const getSurveyRouteSuccess = async () => {
  surveyService.getSurveyService = jest.fn().mockResolvedValue(surveyMockData);
  const res = await request(app).get("/api/survey");

  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual(surveyMockData);
};

const getSurveyRouteFailed = async () => {
  surveyService.getSurveyService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).get("/api/survey");

  expect(res.statusCode).toEqual(403);
  expect(res.body).toHaveProperty("message");
};

export { getSurveyRouteSuccess, getSurveyRouteFailed };
