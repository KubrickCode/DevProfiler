// user.route.test.ts
import request from "supertest";
import { app } from "../..";
import { checkPasswordRouteSuccess } from "./user/checkPassword.route.helper";
import { updateUserRouteSuccess } from "./user/updateUser.route.helper";
import { deleteUserRouteSuccess } from "./user/deleteUser.route.helper";
import { getUserRouteSucess } from "./user/getUser.route.helper";

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

  describe("getUserRoute", () => {
    it("getUserRouteSucess", getUserRouteSucess);
  });
});
