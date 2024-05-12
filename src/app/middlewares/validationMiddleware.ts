import { Request, Response, NextFunction } from "express";
import { Schema, ValidationError } from "joi";

const validateMiddleware =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      // Joi validation error occurred
      const { details } = error as ValidationError;
      const errors = details.map((detail) => detail.message);
      return res.status(400).json({ errors });
    }

    // No validation error, proceed to the next middleware
    next();
  };

export default validateMiddleware;
