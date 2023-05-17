import { userService } from "../../../dependency/user.dependency";

export const deleteUserServiceSuccess = async () => {
  const mockUserId = 42;
  const result = await userService.deleteUserService(mockUserId);

  expect(result.id).toEqual(mockUserId);
};
