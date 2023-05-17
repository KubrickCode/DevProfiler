import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import Redis from "../db/Redis";
import { User } from "../db/db.type";
import HandlePassword from "./handlePassword";
import UserRepository from "../db/repository/user.repository";
dotenv.config();

class HandleLogin {
  constructor(
    private userRepository: UserRepository,
    private handlePassword: HandlePassword,
    private redis: Redis
  ) {}

  signJWT(payload: { id: number; email: string }) {
    const secret = process.env.JWT_SECRET!;
    const refreshSecret = process.env.JWT_REFRESH_SECRET!;

    const token = jwt.sign(payload, secret, {
      algorithm: "HS256",
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign(payload, refreshSecret, {
      algorithm: "HS256",
      expiresIn: "14d",
    });

    return { token, refreshToken };
  }

  verifyRefreshToken = async (refreshToken: string) => {
    const refreshSecret = process.env.JWT_REFRESH_SECRET!;

    return new Promise((resolve, reject) => {
      jwt.verify(refreshToken, refreshSecret, async (err, user) => {
        if (err) {
          return resolve(false);
        }

        const { id, email } = user as User;
        const existingRefreshToken = await this.redis.getRefreshToken(id);

        if (!existingRefreshToken || existingRefreshToken !== refreshToken) {
          return resolve(false);
        }

        const payload = { id, email };
        const newToken = this.signJWT(payload).token;
        resolve(newToken);
      });
    });
  };

  loginAuthenticate = async (email: string, password: string) => {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) {
      return { message: "존재하지 않는 계정입니다" };
    }
    const comparePasswordResult = await this.handlePassword.comparePassword(
      password,
      user?.password as string
    );
    if (!comparePasswordResult) {
      return { message: "비밀번호가 일치하지 않습니다" };
    }
    const { id } = user as User;
    const { token, refreshToken } = this.signJWT({ email, id });
    await this.redis.storeRefreshToken(id, refreshToken);
    return { token, refreshToken };
  };
}

export default HandleLogin;
