import { User as UserType } from "../db/db.type";

declare global {
  namespace Express {
    interface AuthInfo {}
    interface User extends UserType {}

    interface Request {
      authInfo?: AuthInfo | undefined;
      user?: User | undefined;
    }
  }
}
