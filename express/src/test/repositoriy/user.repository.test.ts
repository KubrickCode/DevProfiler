// user.repository.test.ts
import { startServer } from "../../app";
import UserRepository from "../../db/repository/user.repository";

describe("UserRepository", () => {
  let server: any;

  beforeAll(() => {
    server = startServer();
  });

  afterAll((done) => {
    server.close(done);
  });

  it("createUserRepository", async () => {
    //Arrange
    const mockUser = { email: "test@test.com", password: "hashedpassword" };

    // Act
    const user = await UserRepository.create(mockUser);

    // Assert
    expect(user.email).toEqual(mockUser.email);
    expect(user.password).toEqual(mockUser.password);
  });
});
