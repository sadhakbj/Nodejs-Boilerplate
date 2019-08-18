const dbTables = require("../../app/constants/dbtable");

/**
 * Run the database seeds.
 */
exports.seed = knex => {
  return knex(dbTables.users)
    .del()
    .then(() => {
      return knex(dbTables.users).insert([
        {
          name: "Bijaya Kuikel",
          username: "bijaya.kuikel",
          email: "bijaya@bijaya.com",
          password:
            "$2b$12$P5eHEuLpnmZcPHCcWs7Al.V/qgBHEUesYQslvCws4unFNIjhEOyAu" //password
        }
      ]);
    });
};
