exports.up = function (knex) {
    return knex.schema.createTable("Apartments", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("location").notNullable();
      table.integer("price").notNullable();
      table.text("description").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("Apartments");
  };
  