import userRepository from "../../../db/repository/user.repository";
import {
  comparePassword,
  hashPassword,
} from "../../../integrations/handlePassword";

export const updateUserRepositorySuccess = async () => {
  const mockData = {
    id: 42,
    password: "test1234!@",
  };
  const hashedPassword = await hashPassword(mockData.password);
  const result = await userRepository.update(mockData.id, hashedPassword);
  expect(result.id).toEqual(mockData.id);
  expect(comparePassword(mockData.password, result.password)).toBeTruthy();
};
