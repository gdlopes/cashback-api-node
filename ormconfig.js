module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "entities": [String(process.env.TYPEORM_ENTITIES)],
  "migrations": [String(process.env.TYPEORM_MIGRATIONS)],
  "cli": {
    "migrationsDir": String(process.env.TYPEORM_MIGRATIONS_DIR)
  },
}