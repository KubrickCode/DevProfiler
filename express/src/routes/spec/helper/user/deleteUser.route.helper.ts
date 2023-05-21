import request from "supertest";
import { app } from "../../../..";

import { userService } from "../../../../dependency/user.dependency";

const deleteUserRouteSuccess = async () => {
  userService.deleteUserService = jest.fn().mockResolvedValue(true);
  const res = await request(app).delete("/api/user");

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

const deleteUserRouteFailed = async () => {
  userService.deleteUserService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).delete("/api/user");

  expect(res.statusCode).toEqual(404);
};

export { deleteUserRouteSuccess, deleteUserRouteFailed };
