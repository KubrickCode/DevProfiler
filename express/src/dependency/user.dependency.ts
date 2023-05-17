import UserRepository from "../db/repository/user.repository";
import UserService from "../services/user.service";
import HandleLogin from "../integrations/handleLogin";
import UserController from "../controllers/user.controller";

const userRepository = new UserRepository();
const handleLogin = new HandleLogin(userRepository);
export const userService = new UserService(userRepository, handleLogin);
export const userController = new UserController(userService);
