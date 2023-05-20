import request from "supertest";
import { app } from "../../../..";

import { userService } from "../../../../dependency/user.dependency";

const updateUserRouteSuccess = async () => {
  userService.updateUserService = jest.fn().mockResolvedValue(true);
  const res = await request(app).patch("/api/user");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

const updateUserRouteFailed = async () => {
  userService.updateUserService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).patch("/api/user");

  expect(res.statusCode).toEqual(404);
};

export { updateUserRouteSuccess, updateUserRouteFailed };
