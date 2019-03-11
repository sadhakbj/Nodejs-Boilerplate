/**
 * Specify the table name.
 */
const TABLE = "users";

/**
 * Run the database seeds.
 */
exports.seed = knex => {
  return knex(TABLE)
    .del()
    .then(() => {
      return knex(TABLE).insert([
        {
          name: "Bijaya Kuikel",
          username: "bijaya.kuikel",
          email: "bijaya@bijaya.com",
          password: "password"
        }
      ]);
    });
};
