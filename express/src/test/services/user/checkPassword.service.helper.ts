import userService from "../../../services/user.service";

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
