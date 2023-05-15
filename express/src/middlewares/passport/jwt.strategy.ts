// jwt.strategy.ts
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import { User } from "../../db/db.type";
dotenv.config();

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

if (!opts.secretOrKey) {
  throw new Error("JWT secret not found");
}

const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  return done(null, jwt_payload as User);
});

export default jwtStrategy;
