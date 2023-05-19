import { handdlePassword } from "../../../dependency/auth.dependency";
import { userService } from "../../../dependency/user.dependency";

const updateUserServiceSuccess = async () => {
  const mockData = {
    id: 42,
    password: "test1234!@",
  };
  const result = await userService.updateUserService(
    mockData.id,
    mockData.password
  );

  expect(
    handdlePassword.comparePassword(mockData.password, result.password!)
  ).toBeTruthy();
};

export { updateUserServiceSuccess };
