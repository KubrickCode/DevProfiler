import { redis } from "../../dependency/auth.dependency";
import { createUserRouteSuccess } from "./helper/auth/createUser.route.helper";
import { loginRouteSuccess } from "./helper/auth/login.route.helper";
import { refreshTokenRouteSuccess } from "./helper/auth/refreshToken.route.helper";

describe("/api/auth", () => {
  beforeAll(async () => {
    await redis.connect();
  });

  afterAll(() => {
    redis.disconnect();
  });

  describe("createUserRoute", () => {
    it("createUserRouteSuccess", createUserRouteSuccess);
  });

  describe("loginRoute", () => {
    it("loginRouteSuccess", loginRouteSuccess);
  });

  describe("refreshTokenRoute", () => {
    it("refreshTokenRouteSuccess", refreshTokenRouteSuccess);
  });
});
