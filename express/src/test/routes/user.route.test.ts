// user.route.test.ts
import request from "supertest";
import { app } from "../..";
import { connectRedis, disconnectRedis } from "../../db/Redis";
import { checkPasswordRouteSuccess } from "./user/checkPassword.route.helper";
import { updateUserRouteSuccess } from "./user/updateUser.route.helper";
import { createUserRouteSuccess } from "./user/createUser.route.helper";
import { deleteUserRouteSuccess } from "./user/deleteUser.route.helper";

describe("/api/user", () => {
  beforeAll(async () => {
    await connectRedis();
  });

  afterAll(() => {
    disconnectRedis();
  });

  describe.only("createUserRoute", () => {
    it("createUserRouteSuccess", createUserRouteSuccess);
  });

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

  it("refreshTokenRoute", async () => {
    const refreshToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg1MzU5ODQ1fQ.9Tf6uz48i2-bJzaG2NUlXry8AL3moRMT1jc05dyUnpU";
    const res = await request(app)
      .get("/api/user/refresh")
      .set("x-refresh-token", refreshToken);

    expect(res.body).toHaveProperty("token");
  });

  it("loginRoute", async () => {
    const res = await request(app)
      .post("/api/user/login")
      .send({ email: "test@gmail.com", password: "" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("refreshToken");
    expect(res.body).toHaveProperty("token");
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
