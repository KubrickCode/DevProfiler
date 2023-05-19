import request from "supertest";
import { app } from "../../..";

const refreshTokenRouteSuccess = async () => {
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg1MzU5ODQ1fQ.9Tf6uz48i2-bJzaG2NUlXry8AL3moRMT1jc05dyUnpU";
  const res = await request(app)
    .get("/api/auth/refresh")
    .set("x-refresh-token", refreshToken);

  expect(res.body).toHaveProperty("token");
};

export { refreshTokenRouteSuccess };
