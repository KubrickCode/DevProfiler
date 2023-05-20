import { userRepository } from "../../../../../dependency/auth.dependency";

const getUserByEmailRepositorySucess = async () => {
  const mockEmail = "test@test.test";
  const user = await userRepository.getUserByEmail(mockEmail);

  expect(user?.email).toEqual(mockEmail);
};

const getUserByEmailRepositoryFailed = async () => {
  const mockEmail = "test@test.test2";

  await expect(userRepository.getUserByEmail(mockEmail)).rejects.toThrow();
};

export { getUserByEmailRepositorySucess, getUserByEmailRepositoryFailed };
