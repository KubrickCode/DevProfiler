import { Request } from 'express';

interface RequestUser extends Request {
  user: {
    id: number;
    email: string;
    token: string;
    refreshToken: string;
  };
}

export { RequestUser };
