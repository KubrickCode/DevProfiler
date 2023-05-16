import userService from "../../../services/user.service";

export const deleteUserServiceSuccess = async () => {
  const mockUserId = 42;
  const result = await userService.deleteUserService(mockUserId);

  expect(result.id).toEqual(mockUserId);
};
