import userRepository from "../../../db/repository/user.repository";

export const deleteUserRepositorySuccess = async () => {
  const mockUserId = 43;
  const result = await userRepository.delete(mockUserId);
  expect(result.id).toEqual(mockUserId);
};
