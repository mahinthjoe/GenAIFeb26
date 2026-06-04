import pino from 'pino';
import pkg from '../../package.json';

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

export default {
  logger,
  appName: pkg.name || 'resume-search-rag',
  version: pkg.version || '0.0.0',
  port: Number(process.env.PORT || 3000)
};
