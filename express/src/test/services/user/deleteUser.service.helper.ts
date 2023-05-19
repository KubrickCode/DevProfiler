import { userService } from "../../../dependency/user.dependency";

const deleteUserServiceSuccess = async () => {
  const mockUserId = 42;
  const result = await userService.deleteUserService(mockUserId);

  expect(result.id).toEqual(mockUserId);
};

export { deleteUserServiceSuccess };
