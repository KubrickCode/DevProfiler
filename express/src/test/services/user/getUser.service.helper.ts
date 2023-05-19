import { userService } from "../../../dependency/user.dependency";

const getUserServiceSuccess = async () => {
  const mockUserEmail = "test@test.com";
  const user = await userService.getUserService(mockUserEmail);

  expect(user?.email).toEqual(mockUserEmail);
};

export { getUserServiceSuccess };
