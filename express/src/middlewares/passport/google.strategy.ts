import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { googleConfig } from "../../shared/config";
import {
  handdlePassword,
  handleLogin,
  redis,
  userService,
} from "../../dependency/user.dependency";

const { signJWT } = handleLogin;
const { getUserService, createUserService } = userService;
const { storeRefreshToken } = redis;
const { hashPassword, getRandomPassword } = handdlePassword;

const googleStrategy = new GoogleStrategy(
  googleConfig,
  async (accessToken, refreshToken, profile, done) => {
    try {
      const email = profile._json.email as string;
      const existingUser = await getUserService(email);

      if (existingUser) {
        const { id, email } = existingUser;
        const { token, refreshToken } = signJWT({ id, email });
        await storeRefreshToken(id, refreshToken);
        return done(null, { id, email, token, refreshToken });
      }

      const hashedPassword = await hashPassword(getRandomPassword());

      await createUserService({
        email,
        password: hashedPassword,
      });

      const savedUser = await getUserService(email);

      const { id } = savedUser;

      const { token, refreshToken } = signJWT({ id, email });
      await storeRefreshToken(id, refreshToken);

      done(null, { ...savedUser, token, refreshToken });
    } catch (err: any) {
      done(err);
    }
  }
);

export default googleStrategy;
