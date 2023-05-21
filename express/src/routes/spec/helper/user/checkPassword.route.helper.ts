import request from "supertest";
import { app } from "../../../..";

import { userService } from "../../../../dependency/user.dependency";

const checkPasswordRouteSuccess = async () => {
  userService.checkPasswordService = jest.fn().mockResolvedValue(true);

  const res = await request(app).post("/api/user/check-password").send({
    password: "test",
  });

  expect(res.body.message).toEqual("비밀번호 확인 성공");
};

const checkPasswordRouteFailed = async () => {
  userService.checkPasswordService = jest.fn().mockRejectedValue(new Error());

  const res = await request(app).post("/api/user/check-password").send({
    password: "test",
  });

  expect(res.statusCode).toEqual(404);
};

export { checkPasswordRouteSuccess, checkPasswordRouteFailed };
