// user.service.test.ts
import { connectRedis, disconnectRedis } from "../../db/Redis";
import UserService from "../../services/user.service";
import { comparePassword } from "./../../integrations/handlePassword";

describe("UserService", () => {
  beforeAll(async () => {
    await connectRedis();
  });

  afterAll(() => {
    disconnectRedis();
  });

  it("getUserService", async () => {
    const mockUserEmail = "test@test.com";
    const user = await UserService.getUserService(mockUserEmail);

    expect(user.email).toEqual(mockUserEmail);
  });

  it("createUserService", async () => {
    const mockUser = { email: "test@test.com", password: "hashedpassword" };
    const user = await UserService.createUserService(mockUser);

    expect(user).toHaveProperty("refreshToken");
    expect(user).toHaveProperty("token");
  });

  it("updateUserService", async () => {
    const mockUser = { id: 35, password: "test1234!@" };
    const user = await UserService.updateUserService(
      mockUser.id,
      mockUser.password
    );
    expect(user.email).toEqual("test@test.com");
    expect(user.id).toEqual(35);
    expect(comparePassword(user.password, mockUser.password)).toBeTruthy();
  });

  it("deleteUserService", async () => {
    const mockUserId = 36;
    const user = await UserService.deleteUserService(mockUserId);
    expect(user.id).toEqual(mockUserId);
  });

  it("loginService", async () => {
    const mockUser = { email: "test@test.com", password: "hashedpassword" };
    const user = await UserService.loginService(
      mockUser.email,
      mockUser.password
    );
    expect(user).toHaveProperty("refreshToken");
    expect(user).toHaveProperty("token");
  });

  it.only("refreshTokenService", async () => {
    const refreshToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg1MzU5ODQ1fQ.9Tf6uz48i2-bJzaG2NUlXry8AL3moRMT1jc05dyUnpU";
    const token = await UserService.refreshTokenService(refreshToken);
    expect(token).toBeTruthy();
  });
});
