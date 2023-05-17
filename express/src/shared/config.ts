import dotenv from "dotenv";
import { StrategyOptions } from "passport-google-oauth20";
import { StrategyOption } from "passport-kakao";
dotenv.config();

const googleConfig: StrategyOptions = {
  clientID: process.env.GOOGLE_ID as string,
  clientSecret: process.env.GOOGLE_SECRET as string,
  callbackURL: process.env.GOOGLE_CALLBACK as string,
};

const kakaoConfig: StrategyOption = {
  clientID: process.env.KAKAO_ID as string,
  callbackURL: process.env.KAKAO_CALLBACK as string,
};

export { googleConfig, kakaoConfig };
