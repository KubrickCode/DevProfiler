import request from "supertest";
import { app } from "../../../app";

export const deleteSurveyRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjQyLCJpYXQiOjE2ODQyMzExNTEsImV4cCI6MTY4NDIzNDc1MX0.V-XVHaiD715CGd5hUHFuTny115vPcjnS-txDjPD0i-M";
  const res = await request(app)
    .delete("/api/survey/18")
    .set("Authorization", `Bearer ${token}`);

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};
