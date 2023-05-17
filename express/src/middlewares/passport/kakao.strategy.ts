// import { Strategy as KakaoStrategy } from "passport-kakao";
// import { kakaoConfig } from "../../shared/config";
// import {
//   handdlePassword,
//   handleLogin,
//   redis,
//   userRepository,
//   userService,
// } from "../../dependency/user.dependency";
// import dotenv from "dotenv";
// dotenv.config();

// const { signJWT } = handleLogin;
// const { getUserService } = userService;
// const { create } = userRepository;
// const { storeRefreshToken } = redis;
// const { hashPassword, getRandomPassword } = handdlePassword;

// const kakaoStrategy = new KakaoStrategy(
//   kakaoConfig,
//   async (accessToken, refreshToken, profile, done) => {
//     try {
//       const email = profile.id + "@kakao.com";
//       const displayName = profile.displayName;

//       const existingUser = await User.getUserByEmail(email);

//       if (existingUser) {
//         const { id } = existingUser;
//         const { token, refreshToken } = signJWT({
//           id,
//           email,
//           nickname: displayName,
//         });
//         return done(null, { ...existingUser, token, refreshToken });
//       }

//       const hashedPassword = await hashPassword(getRandomPassword());

//       await User.createUser({
//         email,
//         nickname: displayName,
//         password: hashedPassword,
//       });

//       const savedUser = await User.getUserByEmail(email as string);
//       const { id } = savedUser;

//       const { token, refreshToken } = signJWT({
//         id,
//         email,
//         nickname: displayName,
//       });

//       done(null, { ...savedUser, token, refreshToken });
//     } catch (err) {
//       done(err);
//     }
//   }
// );

// export default kakaoStrategy;
