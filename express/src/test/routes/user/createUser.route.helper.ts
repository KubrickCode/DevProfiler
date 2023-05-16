import request from "supertest";
import { app } from "../../../app";

export const createUserRouteSuccess = async () => {
  const res = await request(app)
    .post("/api/user")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("refreshToken");
  expect(res.body).toHaveProperty("token");
  console.log(res.body);
};
