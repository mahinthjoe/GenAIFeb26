import { Request, Response, NextFunction } from 'express';
import config from '../config';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  config.logger.error({ err, requestId: res.locals.requestId }, 'Unhandled error');
  const status = err?.status || 500;
  res.status(status).json({ error: err?.message || 'Internal Server Error' });
}
