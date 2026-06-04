import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import pinoHttp from 'pino-http';
import { requestIdMiddleware } from './middleware/requestId';
import { errorHandler } from './middleware/errorHandler';
import healthRouter from './routes/health';
import searchRouter from './routes/search';
import config from './config';

dotenv.config();

const app = express();

app.use(express.json({ limit: '1mb' }));
app.use(requestIdMiddleware);
app.use(pinoHttp({ logger: config.logger } as any));

app.use('/v1/health', healthRouter);
app.use('/v1/search', searchRouter);

app.use(errorHandler);

export default app;
