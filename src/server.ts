import 'reflect-metadata';

import app from './app';

import logger from '@logger/';

app.listen(process.env.APP_PORT, () => {
  logger.info(`🚀 Server started on port ${process.env.APP_PORT}`);
});

