// index.ts
import passport from "passport";
import jwtStrategy from "./jwt.strategy"; // import JWT strategy
import { NextFunction, Request, Response } from "express";
import { TokenExpiredError } from "jsonwebtoken";
import { User } from "../../db/db.type";
import { userService } from "../../dependency/user.dependency";

const initializePassport = () => {
  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser(async (email: string, done: any) => {
    try {
      const result = await userService.getUserService(email);
      done(null, result);
    } catch (err) {
      done(err);
    }
  });

  passport.use(jwtStrategy);

  return passport;
};

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    "jwt",
    { session: false },
    (err: Error, user: User, info: any) => {
      if (err) {
        return next(err);
      }

      if (info instanceof TokenExpiredError) {
        return res.status(401).send({ message: "토큰이 만료되었습니다" });
      }

      if (!user) {
        return res.status(401).send({ message: "잘못된 토큰 형식입니다" });
      }

      req.user = user;
      return next();
    }
  )(req, res, next);
};

export { initializePassport, validateJWT };
