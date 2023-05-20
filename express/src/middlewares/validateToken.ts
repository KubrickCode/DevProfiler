import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import { User } from "../db/db.type";
import { NextFunction, Request, Response } from "express";
dotenv.config();

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

if (!opts.secretOrKey) {
  throw new Error("JWT secret not found");
}

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    return done(null, jwt_payload as User);
  })
);

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: User, info: any) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        if (info.name === "TokenExpiredError") {
          throw "토큰이 만료되었습니다";
        } else {
          throw "잘못된 토큰 형식입니다";
        }
      }
      req.user = user;
      return next();
    }
  )(req, res, next);
};

export default validateToken;
