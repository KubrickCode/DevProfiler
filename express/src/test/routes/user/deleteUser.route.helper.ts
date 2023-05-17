import request from "supertest";
import { app } from "../../..";

export const deleteUserRouteSuccess = async () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOjQ1LCJpYXQiOjE2ODQyMzc2MDQsImV4cCI6MTY4NDI0MTIwNH0.zNFVBSejJXTgRIa83djPkBRhWZs_oDNi0f3f2LPzySM";
  const res = await request(app)
    .delete("/api/user")
    .set("Authorization", `Bearer ${token}`);

  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty("message");
};
