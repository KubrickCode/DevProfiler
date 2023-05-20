import request from "supertest";
import { app } from "../../../..";

import { userService } from "../../../../dependency/user.dependency";

const mockUser = {
  id: 1,
  email: "test@gmail.com",
  provider: "Local",
};

const getUserRouteSucess = async () => {
  userService.getUserService = jest.fn().mockResolvedValue(mockUser);
  const res = await request(app).get("/api/user");

  expect(res.body).toEqual(mockUser);
};

const getUserRouteFailed = async () => {
  userService.getUserService = jest.fn().mockRejectedValue(new Error());
  const res = await request(app).get("/api/user");

  expect(res.statusCode).toEqual(404);
};

export { getUserRouteSucess, getUserRouteFailed };
