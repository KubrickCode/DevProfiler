import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { RequestHandler } from "express";

export const validateBody = <T extends object>(
  type: new () => T
): RequestHandler => {
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

export const validateNumberParams = (): RequestHandler => {
  return (req, res, next) => {
    const paramValue = req.params.id;
    const id = Number(paramValue);

    if (!paramValue || isNaN(id)) {
      res.status(400).json({
        error: `잘못된 id값 요청입니다`,
      });
    } else {
      req.params.id = id;
      next();
    }
  };
};
