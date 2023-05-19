import { authService } from "../../../dependency/auth.dependency";

export const createUserServiceSuccess = async () => {
  const mockData = {
    email: "test@gmail.com",
    password: "test1234!@",
  };
  const result = await authService.createUserService(mockData);

  expect(result).toHaveProperty("refreshToken");
  expect(result).toHaveProperty("token");
};
