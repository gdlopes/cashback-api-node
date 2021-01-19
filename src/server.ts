import 'reflect-metadata';

import app from './app';

import logger from '@logger/';

app.listen(3000, () => {
  logger.info('🚀 Server started on port 3000');
});

