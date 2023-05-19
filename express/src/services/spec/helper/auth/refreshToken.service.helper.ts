import { authService } from "../../../../dependency/auth.dependency";

const refreshTokenServiceSuccess = async () => {
  const mockRefreshToken = "";
  const token = await authService.refreshTokenService(mockRefreshToken);

  expect(token).toBeTruthy();
};

export { refreshTokenServiceSuccess };
