// user.service.test.ts
import { connectRedis, disconnectRedis } from "../../db/Redis";
import UserService from "../../services/user.service";

describe("UserService", () => {
  beforeAll(async () => {
    await connectRedis();
  });

  afterAll(() => {
    disconnectRedis();
  });

  it("createUserService", async () => {
    // Arrange
    const mockUser = { email: "test@test.com", password: "hashedpassword" };
    const user = await UserService.createUserService(mockUser);

    // Assert
    expect(user).toHaveProperty("refreshToken");
    expect(user).toHaveProperty("token");
  });
});
