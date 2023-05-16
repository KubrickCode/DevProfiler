import { comparePassword } from "../../../integrations/handlePassword";
import userService from "../../../services/user.service";

export const updateUserServiceSuccess = async () => {
  const mockData = {
    id: 42,
    password: "test1234!@",
  };
  const result = await userService.updateUserService(
    mockData.id,
    mockData.password
  );

  expect(comparePassword(mockData.password, result.password)).toBeTruthy();
};
