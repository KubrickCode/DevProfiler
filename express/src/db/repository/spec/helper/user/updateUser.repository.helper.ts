import { userRepository } from "../../../../../dependency/auth.dependency";
import { handdlePassword } from "../../../../../dependency/auth.dependency";

const updateUserRepositorySuccess = async () => {
  const mockData = {
    id: 42,
    password: "test1234!@",
  };
  const hashedPassword = await handdlePassword.hashPassword(mockData.password);
  const result = await userRepository.update(mockData.id, hashedPassword);
  expect(result.id).toEqual(mockData.id);
  expect(
    handdlePassword.comparePassword(mockData.password, result.password!)
  ).toBeTruthy();
};

export { updateUserRepositorySuccess };
