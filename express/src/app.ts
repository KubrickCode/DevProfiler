import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hi");
});

app.listen(3001, () => console.log("Express 서버 실행 완료"));
