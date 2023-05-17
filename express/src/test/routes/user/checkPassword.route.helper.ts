import request from "supertest";
import { app } from "../../..";

export const checkPasswordRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjQyLCJpYXQiOjE2ODQyMzUzMzgsImV4cCI6MTY4NDIzODkzOH0.VsV4ERTtK3BhJWymJ4PqNIy7NWLv2w6F333r7lLkets";
  const res = await request(app)
    .post("/api/user/check-password")
    .set("Authorization", `Bearer ${token}`)
    .send({
      password: "",
    });

  expect(res).toBeTruthy();
};
