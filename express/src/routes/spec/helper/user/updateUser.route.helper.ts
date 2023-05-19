import request from "supertest";
import { app } from "../../../..";

const updateUserRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjQyLCJpYXQiOjE2ODQyMzUzMzgsImV4cCI6MTY4NDIzODkzOH0.VsV4ERTtK3BhJWymJ4PqNIy7NWLv2w6F333r7lLkets";
  const res = await request(app)
    .patch("/api/user")
    .set("Authorization", `Bearer ${token}`)
    .send({
      password: "test1234!@",
    });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};

export { updateUserRouteSuccess };
