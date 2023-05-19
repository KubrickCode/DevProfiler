import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";

const validateBody = <T extends object>(type: new () => T): RequestHandler => {
  return async (req, res, next) => {
    const dtoInstance = plainToClass(type, req.body);
    const errors = await validate(dtoInstance, { whitelist: true });

    if (errors.length > 0) {
      const message = errors
        .map((error) => Object.values(error.constraints ?? {}))
        .flat();
      res.status(400).json({ errors: message });
    } else {
      next();
    }
  };
};

export { validateBody };
