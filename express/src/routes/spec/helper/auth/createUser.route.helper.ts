import request from "supertest";
import { app } from "../../../..";

import { authService } from "../../../../dependency/auth.dependency";

const mockToken = {
  token: "token",
  refreshToken: "refreshToken",
};

const createUserRouteSuccess = async () => {
  authService.createUserService = jest.fn().mockResolvedValue(mockToken);

  const res = await request(app)
    .post("/api/auth")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toEqual(mockToken);
};

const createUserRouteFailed = async () => {
  authService.createUserService = jest.fn().mockRejectedValue(new Error());

  const res = await request(app)
    .post("/api/auth")
    .send({ email: "test@gmail.com", password: "test1234!@" });

  expect(res.statusCode).toEqual(404);
  expect(res.body).toHaveProperty("message");
};

export { createUserRouteSuccess, createUserRouteFailed };
