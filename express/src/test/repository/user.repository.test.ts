import { startServer } from "../..";
import { userRepository } from "../../dependency/auth.dependency";
import { deleteUserRepositorySuccess } from "./user/deleteUser.repository.helper";
import { updateUserRepositorySuccess } from "./user/updateUser.repository.helper";

describe("UserRepository", () => {
  let server: any;

  beforeAll(() => {
    server = startServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  describe("updateUserRepository", () => {
    it("updateUserRepositorySuccess", updateUserRepositorySuccess);
  });

  describe("deleteUserRepository", () => {
    it("deleteUserRepositorySuccess", deleteUserRepositorySuccess);
  });

  it("getUserByEmailRepository", async () => {
    const mockEmail = "test@gmail.com";
    const user = await userRepository.getUserByEmail(mockEmail);

    expect(user?.id).toEqual(42);
    expect(user?.email).toEqual(mockEmail);
  });

  it("updateUserRepository", async () => {
    const mockUser = { id: 35, password: "test1234!@" };
    const result = await userRepository.update(mockUser.id, mockUser.password);

    expect(result).toEqual({
      email: "test@test.com",
      id: mockUser.id,
      password: mockUser.password,
    });
  });

  it("deleteUserRepository", async () => {
    const mockUserId = 35;
    const result = await userRepository.delete(mockUserId);

    expect(result.id).toEqual(mockUserId);
  });
});
