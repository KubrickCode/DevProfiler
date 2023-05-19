import { Strategy as KakaoStrategy } from "passport-kakao";
import { kakaoConfig } from "../../shared/config";
import {
  handleLogin,
  redis,
  userRepository,
} from "../../dependency/auth.dependency";
import { userService } from "../../dependency/user.dependency";
import dotenv from "dotenv";
import { User } from "../../db/db.type";
dotenv.config();

const { signJWT } = handleLogin;
const { getUserService } = userService;
const { create } = userRepository;
const { storeRefreshToken } = redis;

const kakaoStrategy = new KakaoStrategy(
  kakaoConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile.id + "@kakao.com";
      const provider = "Kakao";

      const existingUser = await getUserService(email);

      if (existingUser) {
        const { id, email, provider } = existingUser;
        const { token, refreshToken } = signJWT({ id, email, provider });
        await storeRefreshToken(id, refreshToken);
        return done(null, { id, email, token, provider, refreshToken });
      }

      await create({
        email,
        provider,
      });

      const savedUser = await getUserService(email);
      const { id } = savedUser!;

      const { token, refreshToken } = signJWT({ id, email, provider });
      await storeRefreshToken(id, refreshToken);

      done(null, { ...savedUser, token, refreshToken } as User);
    } catch (err) {
      done(err);
    }
  }
);

export default kakaoStrategy;
