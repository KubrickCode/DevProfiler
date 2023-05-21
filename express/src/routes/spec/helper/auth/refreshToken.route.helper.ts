import request from "supertest";
import { app } from "../../../..";

import { authService } from "../../../../dependency/auth.dependency";

const mockNewToken = "mockNewToken";

const refreshTokenRouteSuccess = async () => {
  authService.refreshTokenService = jest.fn().mockResolvedValue(mockNewToken);
  const res = await request(app)
    .get("/api/auth/refresh")
    .set("x-refresh-token", "mockOldToken");

  expect(res.statusCode).toEqual(201);
  expect(res.body.token).toEqual(mockNewToken);
};

const refreshTokenRouteFailed = async () => {
  authService.refreshTokenService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app)
    .get("/api/auth/refresh")
    .set("x-refresh-token", "mockOldToken");

  expect(res.statusCode).toEqual(401);
};

export { refreshTokenRouteSuccess, refreshTokenRouteFailed };
