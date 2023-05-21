import { Provider } from "../../../../../db/db.type";
import { userRepository } from "../../../../../dependency/auth.dependency";
import { handdlePassword } from "../../../../../dependency/auth.dependency";

const createUserRepositorySuccess = async () => {
  const mockUser = {
    email: "test@test.test",
    provider: "Local" as Provider,
    password: await handdlePassword.hashPassword("test1234!@"),
  };
  const result = await userRepository.create(mockUser);
  expect(result.email).toEqual(mockUser.email);
  expect(result.provider).toEqual(mockUser.provider);
  expect(
    await handdlePassword.comparePassword(
      "test1234!@",
      result.password as string
    )
  ).toBeTruthy();
};

const createUserRepositoryFailed = async () => {
  const mockUser = {
    email: "test@test.test",
    provider: "GitHub" as Provider,
    password: await handdlePassword.hashPassword("test1234!@"),
  };

  await expect(userRepository.create(mockUser)).rejects.toThrow();
};

export { createUserRepositorySuccess, createUserRepositoryFailed };
