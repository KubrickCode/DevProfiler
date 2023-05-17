import { userService } from "../../../dependency/user.dependency";

export const checkPasswordServiceSuccess = async () => {
  const mockData = {
    email: "test@gmail.com",
    password: "",
  };
  const result = await userService.checkPasswordService(
    mockData.email,
    mockData.password
  );

  expect(result).toBeTruthy();
};
