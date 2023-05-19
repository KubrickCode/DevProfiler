import request from "supertest";
import { app } from "../../..";

const createUserRouteSuccess = async () => {
  const res = await request(app)
    .post("/api/auth")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("refreshToken");
  expect(res.body).toHaveProperty("token");
  console.log(res.body);
};

export { createUserRouteSuccess };
