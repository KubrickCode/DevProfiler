import { redis } from "../../dependency/auth.dependency";
import { createUserServiceSuccess } from "./auth/createUser.service.helper";
import { loginServiceSuccess } from "./auth/login.service.helper";
import { refreshTokenServiceSuccess } from "./auth/refreshToken.service.helper";

describe("AuthService", () => {
  beforeAll(async () => {
    await redis.connect();
  });

  afterAll(() => {
    redis.disconnect();
  });

  describe("createUserService", () => {
    it("createUserServiceSuccess", createUserServiceSuccess);
  });

  describe("loginService", () => {
    it("loginServiceSuccess", loginServiceSuccess);
  });

  describe("refreshTokenService", () => {
    it("refreshTokenServiceSuccess", refreshTokenServiceSuccess);
  });
});
