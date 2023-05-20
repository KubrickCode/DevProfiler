import * as bcryptjs from 'bcryptjs';

const hashPassword = async (password: string): Promise<string> => {
  return await bcryptjs.hash(password, 10);
};

const comparePassword = async (
  inputPassword: string,
  hashedPassword: string,
): Promise<boolean> => {
  return await bcryptjs.compare(inputPassword, hashedPassword);
};

export { comparePassword, hashPassword };
