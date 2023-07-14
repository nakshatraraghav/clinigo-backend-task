import { AnyZodObject, ZodError } from "zod";
import type { Request, Response, NextFunction } from "express";

export default function validate(schema: AnyZodObject) {
  return async function (req: Request, res: Response, next: NextFunction) {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });

      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.json(error.issues);
      }

      return res.json("Unexpected Server Error");
    }
  };
}
