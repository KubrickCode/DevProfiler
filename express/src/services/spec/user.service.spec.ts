import { checkPasswordServiceSuccess } from "./helper/user/checkPassword.service.helper";
import { deleteUserServiceSuccess } from "./helper/user/deleteUser.service.helper";
import { updateUserServiceSuccess } from "./helper/user/updateUser.service.helper";
import { getUserServiceSuccess } from "./helper/user/getUser.service.helper";

describe("UserService", () => {
  describe("checkPasswordService", () => {
    it("checkPasswordServiceSuccess", checkPasswordServiceSuccess);
  });

  describe("updateUserService", () => {
    it("updateUserServiceSuccess", updateUserServiceSuccess);
  });

  describe("deleteUserService", () => {
    it("deleteUserServiceSuccess", deleteUserServiceSuccess);
  });

  describe("getUserService", () => {
    it("getUserServiceSuccess", getUserServiceSuccess);
  });
});
