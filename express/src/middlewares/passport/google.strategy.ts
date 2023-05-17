// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import userRepository from "../../db/repository/user.repository";
// import { googleConfig } from "../../shared/config";
// import { hashPassword } from "../../integrations/handlePassword";
// import { getRandomPassword } from "../../integrations/handlePassword";
// import { signJWT } from "../../integrations/handleLogin";
// import { storeRefreshToken } from "../../db/Redis";

// const googleStrategy = new GoogleStrategy(
//   googleConfig,
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       const email = profile._json.email as string;
//       const existingUser = await userRepository.getUserByEmail(email);

//       if (existingUser) {
//         const { id } = existingUser;
//         const { token, refreshToken } = signJWT({ id, email });
//         await storeRefreshToken(id, refreshToken);
//         return done(null, { ...existingUser, token, refreshToken });
//       }

//       const hashedPassword = await hashPassword(getRandomPassword());

//       await userRepository.create({
//         email,
//         password: hashedPassword,
//       });

//       const savedUser = await userRepository.getUserByEmail(email);

//       const { id } = savedUser;

//       const { token, refreshToken } = signJWT({ id, email, nickname: name });
//       await storeRefreshToken(id, refreshToken);

//       done(null, { ...savedUser, token, refreshToken });
//     } catch (err: any) {
//       done(err);
//     }
//   }
// );

// export default googleStrategy;
