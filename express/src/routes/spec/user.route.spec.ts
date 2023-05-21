import {
  checkPasswordRouteFailed,
  checkPasswordRouteSuccess,
} from "./helper/user/checkPassword.route.helper";
import {
  updateUserRouteFailed,
  updateUserRouteSuccess,
} from "./helper/user/updateUser.route.helper";
import {
  deleteUserRouteFailed,
  deleteUserRouteSuccess,
} from "./helper/user/deleteUser.route.helper";
import {
  getUserRouteFailed,
  getUserRouteSucess,
} from "./helper/user/getUser.route.helper";
import { NextFunction, Request, Response } from "express";

jest.mock("../../middlewares/passport", () => ({
  validateJWT: (req: Request, res: Response, next: NextFunction) => {
    req.user = {
      id: 1,
      email: "test@gmail.com",
      provider: "Local",
    };
    next();
  },
  initializePassport: () => ({
    initialize: () => (req: Request, res: Response, next: NextFunction) =>
      next(),
  }),
}));

describe("/api/user", () => {
  describe("getUserRoute", () => {
    it("getUserRouteSucess", getUserRouteSucess);
    it("getUserRouteFailed", getUserRouteFailed);
  });

  describe("checkPasswordRoute", () => {
    it("checkPasswordRouteSuccess", checkPasswordRouteSuccess);
    it("checkPasswordRouteFailed", checkPasswordRouteFailed);
  });

  describe("updateUserRoute", () => {
    it("updateUserRouteSuccess", updateUserRouteSuccess);
    it("updateUserRouteFailed", updateUserRouteFailed);
  });

  describe("deleteUserRoute", () => {
    it("deleteUserRouteSuccess", deleteUserRouteSuccess);
    it("deleteUserRouteFailed", deleteUserRouteFailed);
  });
});
