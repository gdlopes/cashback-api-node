import { createConnection, Connection } from 'typeorm';

import ormConfig from '@ormConfig/';

const connection = async (name = 'default'): Promise<Connection> => {
  return createConnection(
    Object.assign(ormConfig, {
      name,
    }),
  );
};

export default connection;