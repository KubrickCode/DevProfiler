import request from "supertest";
import { app } from "../../../app";

export const updateSurveyRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjQyLCJpYXQiOjE2ODQyMjI1MzksImV4cCI6MTY4NDIyNjEzOX0.pv5jfm7bKEFIJTP3rCIsNi-yxIhVz-yHZTM3I2TmmKg";
  const res = await request(app)
    .patch("/api/survey")
    .set("Authorization", `Bearer ${token}`)
    .send({
      id: 13,
      response: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
    });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};
