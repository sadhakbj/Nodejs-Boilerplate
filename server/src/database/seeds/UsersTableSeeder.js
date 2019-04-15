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
            "$2y$10$GkFw99v47Lev7zgFRl.HFOVtBd/q7dKZazN3Qqvi3EiDHD7XMDMjC" //password
        }
      ]);
    });
};
