require('dotenv').config({
  path: '../../.env',
});
require('ts-node/register');
import type { Knex } from 'knex';

const environments: string[] = ['development', 'staging', 'production'];

const connection: Knex.ConnectionConfig = {
  host: process.env.DB_HOST as string,
  database: process.env.DB_NAME as string,
  user: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
};

const pool: Knex.PoolConfig = {
  min: 2,
  max: 10,
};

const migrations: Knex.MigratorConfig = {
  tableName: 'knex_migrations',
};

const commonConfig: Knex.Config = {
  connection,
  pool,
  migrations,
  client: 'pg',
};

export default Object.fromEntries(environments.map((env: string) => [env, commonConfig]));
