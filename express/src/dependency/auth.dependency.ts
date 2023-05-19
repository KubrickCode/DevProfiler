import UserRepository from "../db/repository/user.repository";
import HandleLogin from "../integrations/handleLogin";
import HandlePassword from "../integrations/handlePassword";
import Redis from "../db/Redis";
import AuthService from "../services/auth.service";
import AuthController from "../controllers/auth.controller";

const redis = new Redis();
const userRepository = new UserRepository();
const handdlePassword = new HandlePassword();
const handleLogin = new HandleLogin(userRepository, handdlePassword, redis);
const authService = new AuthService(
  userRepository,
  handleLogin,
  handdlePassword
);
const authController = new AuthController(authService);

export {
  redis,
  userRepository,
  handdlePassword,
  handleLogin,
  authService,
  authController,
};
