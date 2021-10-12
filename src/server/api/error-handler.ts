import { NextFunction, Request, Response } from 'express';
import { InvalidPriceError, NotFoundError, MissingPropertyError } from '../errors';

export default (err: unknown, _req: Request, res: Response, next: NextFunction): void => {
  if (res.headersSent) {
    return next(err)
  }
  if (err instanceof NotFoundError) {
    res.status(404).json({ message: err.message });
    return;
  }
  if (err instanceof InvalidPriceError || err instanceof MissingPropertyError) {
    res.status(400).json({ message: err.message });
    return;
  }
  next(err);
};
