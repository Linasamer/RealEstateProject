module.exports = {
    up: async (knex) => {
      // Ensure uuid-ossp extension is enabled
      await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
  
      await knex.schema.createTable('Apartments', (table) => {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
        table.string('name').notNullable();
        table.string('location').notNullable();
        table.integer('price').notNullable();
        table.string('description');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
      });
    },
  
    down: async (knex) => {
      await knex.schema.dropTable('Apartments');
    },
  };
  