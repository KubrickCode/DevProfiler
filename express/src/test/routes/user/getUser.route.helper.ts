import request from "supertest";
import { app } from "../../..";

const getUserRouteSucess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpZCI6MzksImlhdCI6MTY4NDE1MDI0NSwiZXhwIjoxNjg0MTUzODQ1fQ.WD5vuYSEiXiE22MFnWQAKMoR0wRPfLOikfbfoTW0kJo";
  const res = await request(app)
    .get("/api/user")
    .set("Authorization", `Bearer ${token}`);

  expect(res.body).toHaveProperty("id");
  expect(res.body).toHaveProperty("email");
};

export { getUserRouteSucess };
