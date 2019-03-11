const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

module.exports = {
  client: process.env.DB_CONNECTION || "postgresql",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
