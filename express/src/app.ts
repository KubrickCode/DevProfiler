import express, { ErrorRequestHandler } from "express";
import router from "./routes";
import cors from "cors";
import helmet from "helmet";
import "express-async-errors";

export const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.use(((err, req, res, next) => {
  console.error(err.message);
  res
    .status(err.status || 500)
    .json({ message: err.message || "서버 실행 오류" });
}) as ErrorRequestHandler);

export const startServer = () => {
  return app.listen(3001, () => console.log("3001번 포트에서 Express 실행"));
};

if (process.env.NODE_ENV !== "test") {
  startServer();
}

export default app;
