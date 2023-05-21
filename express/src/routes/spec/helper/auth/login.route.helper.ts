import request from "supertest";
import { app } from "../../../..";

import { authService } from "../../../../dependency/auth.dependency";

const mockToken = {
  token: "token",
  refreshToken: "refreshToken",
};

const loginRouteSuccess = async () => {
  authService.loginService = jest.fn().mockResolvedValue(mockToken);

  const res = await request(app).post("/api/auth/login");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toEqual(mockToken);
};

const loginRouteFailed = async () => {
  authService.loginService = jest.fn().mockRejectedValue(new Error());

  const res = await request(app).post("/api/auth/login");

  expect(res.statusCode).toEqual(404);
  expect(res.body).toHaveProperty("message");
};

export { loginRouteSuccess, loginRouteFailed };
