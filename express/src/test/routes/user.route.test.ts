// user.route.test.ts
import request from "supertest";
import { app } from "../../app";
import { connectRedis, disconnectRedis } from "../../db/Redis";

beforeAll(async () => {
  await connectRedis();
});

afterAll(() => {
  disconnectRedis();
});

describe("POST /api/user", () => {
  it("createUserRoute", async () => {
    const res = await request(app)
      .post("/api/user")
      .send({ email: "test@test.com", password: "password" });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("refreshToken");
    expect(res.body).toHaveProperty("token");
  });
});
