// user.repository.test.ts
import { startServer } from "../..";
import UserRepository from "../../db/repository/user.repository";
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
    const user = await UserRepository.getUserByEmail(mockEmail);

    expect(user?.id).toEqual(42);
    expect(user?.email).toEqual(mockEmail);
  });

  it("createUserRepository", async () => {
    const mockUser = { email: "test@test.com", password: "test1234!@" };
    const user = await UserRepository.create(mockUser);

    expect(user.email).toEqual(mockUser.email);
    expect(user.password).toEqual(mockUser.password);
  });

  it("updateUserRepository", async () => {
    const mockUser = { id: 35, password: "test1234!@" };
    const result = await UserRepository.update(mockUser.id, mockUser.password);

    expect(result).toEqual({
      email: "test@test.com",
      id: mockUser.id,
      password: mockUser.password,
    });
  });

  it("deleteUserRepository", async () => {
    const mockUserId = 35;
    const result = await UserRepository.delete(mockUserId);

    expect(result.id).toEqual(mockUserId);
  });
});
