import { authService } from "../../../dependency/auth.dependency";

const loginServiceSuccess = async () => {
  const mockData = {
    email: "test@gmail.com",
    password: "test1234!@",
  };
  const result = await authService.loginService(
    mockData.email,
    mockData.password
  );

  expect(result).toHaveProperty("refreshToken");
  expect(result).toHaveProperty("token");
};

export { loginServiceSuccess };
