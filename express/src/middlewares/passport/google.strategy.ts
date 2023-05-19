import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleConfig } from "../../shared/config";
import {
  handleLogin,
  redis,
  userRepository,
} from "../../dependency/auth.dependency";
import { userService } from "../../dependency/user.dependency";
import { User } from "../../db/db.type";

const { signJWT } = handleLogin;
const { getUserService } = userService;
const { create } = userRepository;
const { storeRefreshToken } = redis;

const googleStrategy = new GoogleStrategy(
  googleConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile._json.email as string;
      const provider = "Google";

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
    } catch (err: any) {
      done(err);
    }
  }
);

export default googleStrategy;
