import { checkPasswordServiceSuccess } from "./user/checkPassword.service.helper";
import { deleteUserServiceSuccess } from "./user/deleteUser.service.helper";
import { updateUserServiceSuccess } from "./user/updateUser.service.helper";
import { getUserServiceSuccess } from "./user/getUser.service.helper";

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
