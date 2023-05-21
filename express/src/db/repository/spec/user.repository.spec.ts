import {
  createUserRepositoryFailed,
  createUserRepositorySuccess,
} from "./helper/user/createUser.repository.helper";
import { deleteUserRepositorySuccess } from "./helper/user/deleteUser.repository.helper";
import {
  getUserByEmailRepositoryFailed,
  getUserByEmailRepositorySucess,
} from "./helper/user/getUserByEmail.repository.helper";
import { updateUserRepositorySuccess } from "./helper/user/updateUser.repository.helper";

describe("UserRepository", () => {
  describe("createUserRepository", () => {
    it("createUserRepositorySuccess", createUserRepositorySuccess);
    it("createUserRepositoryFailed", createUserRepositoryFailed);
  });

  describe("getUserByEmailRepository", () => {
    it("getUserByEmailRepositorySucess", getUserByEmailRepositorySucess);
    it("getUserByEmailRepositoryFailed", getUserByEmailRepositoryFailed);
  });

  describe("updateUserRepository", () => {
    it("updateUserRepositorySuccess", updateUserRepositorySuccess);
  });

  describe("deleteUserRepository", () => {
    it("deleteUserRepositorySuccess", deleteUserRepositorySuccess);
  });
});
