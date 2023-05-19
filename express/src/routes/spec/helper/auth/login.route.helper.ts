import request from "supertest";
import { app } from "../../../..";

const loginRouteSuccess = async () => {
  const res = await request(app)
    .post("/api/auth/login")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  console.log(res.body.token);

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("refreshToken");
  expect(res.body).toHaveProperty("token");
};

export { loginRouteSuccess };
