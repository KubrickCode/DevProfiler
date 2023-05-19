import UserService from "../services/user.service";
import UserController from "../controllers/user.controller";
import { handdlePassword, userRepository } from "./auth.dependency";

const userService = new UserService(userRepository, handdlePassword);
const userController = new UserController(userService);

export { userService, userController };
