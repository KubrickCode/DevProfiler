import { redis } from "../../dependency/auth.dependency";
import { createUserServiceSuccess } from "./helper/auth/createUser.service.helper";
import { loginServiceSuccess } from "./helper/auth/login.service.helper";
import { refreshTokenServiceSuccess } from "./helper/auth/refreshToken.service.helper";

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
