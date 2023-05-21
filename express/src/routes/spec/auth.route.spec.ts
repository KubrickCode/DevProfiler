import {
  createUserRouteFailed,
  createUserRouteSuccess,
} from "./helper/auth/createUser.route.helper";
import {
  loginRouteFailed,
  loginRouteSuccess,
} from "./helper/auth/login.route.helper";
import {
  refreshTokenRouteFailed,
  refreshTokenRouteSuccess,
} from "./helper/auth/refreshToken.route.helper";

describe("/api/auth", () => {
  describe("createUserRoute", () => {
    it("createUserRouteSuccess", createUserRouteSuccess);
    it("createUserRouteFailed", createUserRouteFailed);
  });

  describe("loginRoute", () => {
    it("loginRouteSuccess", loginRouteSuccess);
    it("loginRouteFailed", loginRouteFailed);
  });

  describe("refreshTokenRoute", () => {
    it("refreshTokenRouteSuccess", refreshTokenRouteSuccess);
    it("refreshTokenRouteFailed", refreshTokenRouteFailed);
  });
});
