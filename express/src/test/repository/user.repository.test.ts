import { startServer } from "../..";
import { deleteUserRepositorySuccess } from "./user/deleteUser.repository.helper";
import { getUserByEmailRepositorySucess } from "./user/getUserByEmail.repository.helper";
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

  describe("getUserByEmailRepository", () => {
    it("getUserByEmailRepositorySucess", getUserByEmailRepositorySucess);
  });
});
