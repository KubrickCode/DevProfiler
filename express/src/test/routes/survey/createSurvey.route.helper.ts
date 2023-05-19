import request from "supertest";
import { app } from "../../..";

const createSurveyRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjUyLCJpYXQiOjE2ODQzMDc3NjMsImV4cCI6MTY4NDMxMTM2M30.4p98BPmSMEMW285s6VSMbBEbClWEm8oQArwllk7y-wY";
  const res = await request(app)
    .post("/api/survey")
    .set("Authorization", `Bearer ${token}`)
    .send({
      category: "FrontEnd",
      response: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0,
      ],
    });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

export { createSurveyRouteSuccess };
