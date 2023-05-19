import { userRepository } from "../../../dependency/auth.dependency";

const getUserByEmailRepositorySucess = async () => {
  const mockEmail = "test@gmail.com";
  const user = await userRepository.getUserByEmail(mockEmail);

  expect(user?.id).toEqual(42);
  expect(user?.email).toEqual(mockEmail);
};

export { getUserByEmailRepositorySucess };
