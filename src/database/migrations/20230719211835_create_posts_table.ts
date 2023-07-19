import { Knex } from 'knex';

const tableName = 'posts';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('content').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}
