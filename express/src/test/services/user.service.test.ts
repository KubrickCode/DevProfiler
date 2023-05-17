// user.service.test.ts
import { Provider } from "../../db/db.type";
import { redis } from "../../dependency/user.dependency";
import { userService } from "../../dependency/user.dependency";
import { handdlePassword } from "../../dependency/user.dependency";
import { checkPasswordServiceSuccess } from "./user/checkPassword.service.helper";
import { deleteUserServiceSuccess } from "./user/deleteUser.service.helper";
import { updateUserServiceSuccess } from "./user/updateUser.service.helper";

describe("UserService", () => {
  beforeAll(async () => {
    await redis.connect();
  });

  afterAll(() => {
    redis.disconnect();
  });

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

  it("createUserService", async () => {
    const mockUser = {
      email: "test@test.com",
      password: "hashedpassword",
      provider: "LOCAL" as Provider,
    };
    const user = await userService.createUserService(mockUser);

    expect(user).toHaveProperty("refreshToken");
    expect(user).toHaveProperty("token");
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

  it("loginService", async () => {
    const mockUser = { email: "test@test.com", password: "hashedpassword" };
    const user = await userService.loginService(
      mockUser.email,
      mockUser.password
    );
    expect(user).toHaveProperty("refreshToken");
    expect(user).toHaveProperty("token");
  });

  it("refreshTokenService", async () => {
    const refreshToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg1MzU5ODQ1fQ.9Tf6uz48i2-bJzaG2NUlXry8AL3moRMT1jc05dyUnpU";
    const token = await userService.refreshTokenService(refreshToken);
    expect(token).toBeTruthy();
  });
});
