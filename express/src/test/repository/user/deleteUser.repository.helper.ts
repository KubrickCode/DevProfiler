import { userRepository } from "../../../dependency/user.dependency";

export const deleteUserRepositorySuccess = async () => {
  const mockUserId = 43;
  const result = await userRepository.delete(mockUserId);
  expect(result.id).toEqual(mockUserId);
};
