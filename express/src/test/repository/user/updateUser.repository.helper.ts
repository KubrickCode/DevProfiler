import { userRepository } from "../../../dependency/user.dependency";
import { handdlePassword } from "../../../dependency/user.dependency";

export const updateUserRepositorySuccess = async () => {
  const mockData = {
    id: 42,
    password: "test1234!@",
  };
  const hashedPassword = await handdlePassword.hashPassword(mockData.password);
  const result = await userRepository.update(mockData.id, hashedPassword);
  expect(result.id).toEqual(mockData.id);
  expect(
    handdlePassword.comparePassword(mockData.password, result.password)
  ).toBeTruthy();
};
