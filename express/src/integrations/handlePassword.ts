import bcrypt from "bcryptjs";
import crypto from "crypto";

class HandlePassword {
  comparePassword = async (password: string, password2: string) => {
    return await bcrypt.compare(password, password2);
  };

  hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
  };

  getRandomPassword = () => {
    return crypto.randomBytes(10).toString("base64");
  };
}

export default HandlePassword;
