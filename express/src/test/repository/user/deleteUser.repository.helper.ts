import { userRepository } from "../../../dependency/auth.dependency";

const deleteUserRepositorySuccess = async () => {
  const mockUserId = 43;
  const result = await userRepository.delete(mockUserId);
  expect(result.id).toEqual(mockUserId);
};

export { deleteUserRepositorySuccess };
