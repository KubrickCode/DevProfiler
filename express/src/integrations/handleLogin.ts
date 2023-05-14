import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { getRefreshToken, storeRefreshToken } from "../db/Redis";
import { User } from "../db/db.type";
import userRepository from "../db/repository/user.repository";
import { comparePassword } from "./handlePassword";
dotenv.config();

export const signJWT = (payload: { id: number; email: string }) => {
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
};

export const verifyRefreshToken = (refreshToken: string) => {
  const refreshSecret = process.env.JWT_REFRESH_SECRET!;

  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, refreshSecret, async (err, user) => {
      if (err) {
        return resolve(false);
      }

      const { id, email } = user as User;
      const existingRefreshToken = await getRefreshToken(id);

      if (!existingRefreshToken || existingRefreshToken !== refreshToken) {
        return resolve(false);
      }

      const payload = { id, email };
      const newToken = signJWT(payload).token;
      resolve(newToken);
    });
  });
};

export const loginAuthenticate = async (email: string, password: string) => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    return { message: "존재하지 않는 계정입니다" };
  }
  const comparePasswordResult = await comparePassword(
    password,
    user?.password as string
  );
  if (!comparePasswordResult) {
    return { message: "비밀번호가 일치하지 않습니다" };
  }
  const { id } = user as User;
  const { token, refreshToken } = signJWT({ email, id });
  await storeRefreshToken(id, refreshToken);
  return { token, refreshToken };
};
