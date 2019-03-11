const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

module.exports = {
  name: process.env.APP_NAME || "NodeJS App",
  port: process.env.APP_PORT || 3000
};
