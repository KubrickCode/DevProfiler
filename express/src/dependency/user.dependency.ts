import UserRepository from "../db/repository/user.repository";
import UserService from "../services/user.service";
import HandleLogin from "../integrations/handleLogin";
import HandlePassword from "../integrations/handlePassword";
import UserController from "../controllers/user.controller";
import Redis from "../db/Redis";

const redis = new Redis();
const userRepository = new UserRepository();
const handdlePassword = new HandlePassword();
const handleLogin = new HandleLogin(userRepository, handdlePassword, redis);
const userService = new UserService(
  userRepository,
  handleLogin,
  handdlePassword
);
const userController = new UserController(userService);

export {
  redis,
  userRepository,
  handdlePassword,
  handleLogin,
  userService,
  userController,
};
