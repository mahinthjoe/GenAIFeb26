import { Request, Response, NextFunction } from 'express';

export function requestIdMiddleware(req: Request, res: Response, next: NextFunction) {
  const incoming = (req.headers['x-request-id'] as string) || `${Date.now()}-${Math.random().toString(36).slice(2,8)}`;
  res.setHeader('x-request-id', incoming);
  (req as any).requestId = incoming;
  res.locals.requestId = incoming;
  next();
}
