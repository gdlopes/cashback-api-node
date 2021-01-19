// import { createConnection, Connection, ConnectionOptions } from 'typeorm';

// import dotenv from 'dotenv';

// dotenv.config({
//   path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env',
// });

// const options: ConnectionOptions = {
//   type: 'postgres',
//   host: process.env.TYPEORM_HOST,
//   port: Number(process.env.TYPEORM_PORT),
//   username: process.env.TYPEORM_USERNAME,
//   password: process.env.TYPEORM_PASSWORD,
//   database: process.env.TYPEORM_DATABASE,
//   entities: process.env.NODE_ENV === 'production'
//     ? [
//       './dist/infra/typeorm/models/*.js'
//     ]
//     : [String(process.env.TYPEORM_ENTITIES)],
//   migrations: process.env.NODE_ENV === 'production'
//     ? [
//       './dist/infra/typeorm/database/migrations/*.js'
//     ]
//     : [String(process.env.TYPEORM_MIGRATIONS)],
//   cli: {
//     migrationsDir: process.env.NODE_ENV === 'production'
//       ? './dist/infra/typeorm/database/migrations'
//       : process.env.TYPEORM_MIGRATIONS_DIR,
//   },
// };

// const connection = async (): Promise<Connection> => {
//   return createConnection(options);
// };

// export default connection;

import { createConnection, Connection } from 'typeorm';

const connection = async (): Promise<Connection> => {
  return createConnection();
};

export default connection;