// user.route.test.ts
import request from "supertest";
import { app } from "../..";
import { checkPasswordRouteSuccess } from "./helper/user/checkPassword.route.helper";
import { updateUserRouteSuccess } from "./helper/user/updateUser.route.helper";
import { deleteUserRouteSuccess } from "./helper/user/deleteUser.route.helper";
import { getUserRouteSucess } from "./helper/user/getUser.route.helper";

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
