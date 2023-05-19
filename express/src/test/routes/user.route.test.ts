// user.route.test.ts
import request from "supertest";
import { app } from "../..";
import { checkPasswordRouteSuccess } from "./user/checkPassword.route.helper";
import { updateUserRouteSuccess } from "./user/updateUser.route.helper";
import { deleteUserRouteSuccess } from "./user/deleteUser.route.helper";

describe("/api/user", () => {
  describe("checkPasswordRoute", () => {
    it("checkPasswordRouteSuccess", checkPasswordRouteSuccess);
  });

  describe("updateUserRoute", () => {
    it("updateUserRouteSuccess", updateUserRouteSuccess);
  });

  describe("deleteUserRoute", () => {
    it("deleteUserRouteSuccess", deleteUserRouteSuccess);
  });

  it("getUserRoute", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg0MTUzODQ1fQ.WD5vuYSEiXiE22MFnWQAKMoR0wRPfLOikfbfoTW0kJo";
    const res = await request(app)
      .get("/api/user")
      .set("Authorization", `Bearer ${token}`);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("email");
  });

  it("updateUserRoute", async () => {
    const res = await request(app)
      .patch("/api/user/38")
      .send({ password: "test1234!@" });

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual("유저 업데이트 성공");
  });

  it("deleteUserRoute", async () => {
    const res = await request(app).delete("/api/user/38");

    expect(res.statusCode).toEqual(201);
    expect(res.body.message).toEqual("유저 삭제 성공");
  });
});
