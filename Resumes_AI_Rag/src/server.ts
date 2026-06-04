import app from './app';
import config from './config';

const PORT = Number(process.env.PORT || config.port || 3000);

const server = app.listen(PORT, () => {
  config.logger.info({ msg: 'Server started', port: PORT });
});

process.on('SIGINT', () => {
  config.logger.info('SIGINT received, shutting down');
  server.close(() => process.exit(0));
});
