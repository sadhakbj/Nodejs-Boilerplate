const dbTables = require("../../app/constants/dbtable");
/**
 * Run the migrations.
 */
exports.up = knex => {
  return knex.schema.createTable(dbTables.users, table => {
    table.increments();
    table.string("name").notNullable();
    table
      .string("username")
      .unique()
      .notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();

    table.timestamps(true, true);
  });
};

/**
 * Reverse the migrations.
 */
exports.down = knex => knex.schema.dropTable(dbTables.users);
