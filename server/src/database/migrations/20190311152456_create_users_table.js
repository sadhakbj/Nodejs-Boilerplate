/**
 * Specify the table name.
 */
const TABLE = "users";
/**
 * Run the migrations.
 */
exports.up = knex => {
  return knex.schema.createTable(TABLE, table => {
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
exports.down = knex => knex.schema.dropTable(TABLE);
