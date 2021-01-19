import pino from 'pino';

import logConfig from '@config/log';

export default pino({
  enabled: process.env.NODE_ENV === 'development' ? false : logConfig.enabled,
  level: logConfig.level
});