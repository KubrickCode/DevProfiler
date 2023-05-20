import { deleteUserRepositorySuccess } from "./helper/user/deleteUser.repository.helper";
import { getUserByEmailRepositorySucess } from "./helper/user/getUserByEmail.repository.helper";
import { updateUserRepositorySuccess } from "./helper/user/updateUser.repository.helper";

describe("UserRepository", () => {
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
