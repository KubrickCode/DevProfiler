import express, { ErrorRequestHandler } from "express";
import router from "./routes";
import cors from "cors";
import helmet from "helmet";
import { initializePassport } from "./middlewares/passport";
import "express-async-errors";
import { redis } from "./dependency/user.dependency";

export const app = express();
const passport = initializePassport();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use("/api", router);

app.use(((err, req, res, next) => {
  console.error(err.message);
  res
    .status(err.status || 500)
    .json({ message: err.message || "서버 실행 오류" });
}) as ErrorRequestHandler);

export const startServer = async () => {
  return app.listen(3000, () => console.log("3000번 포트에서 Express 실행"));
};

if (process.env.NODE_ENV !== "test") {
  (async () => {
    await startServer();
    await redis.connect();
  })();
}

export default app;
