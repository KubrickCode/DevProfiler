import { userService } from "../../dependency/user.dependency";
import { handdlePassword } from "../../dependency/auth.dependency";
import { checkPasswordServiceSuccess } from "./user/checkPassword.service.helper";
import { deleteUserServiceSuccess } from "./user/deleteUser.service.helper";
import { updateUserServiceSuccess } from "./user/updateUser.service.helper";

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

  it("getUserService", async () => {
    const mockUserEmail = "test@test.com";
    const user = await userService.getUserService(mockUserEmail);

    expect(user?.email).toEqual(mockUserEmail);
  });

  it("updateUserService", async () => {
    const mockUser = { id: 35, password: "test1234!@" };
    const user = await userService.updateUserService(
      mockUser.id,
      mockUser.password
    );
    expect(user.email).toEqual("test@test.com");
    expect(user.id).toEqual(35);
    expect(
      handdlePassword.comparePassword(user.password!, mockUser.password)
    ).toBeTruthy();
  });
});
