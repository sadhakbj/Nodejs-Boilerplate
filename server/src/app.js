const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotEnv = require("dotenv");
const Knex = require("knex");
const { Model } = require("objection");
var morgan = require("morgan");
dotEnv.config();
const app = express();

/**
 * Set up objection.
 */
const knexFile = require("./knexfile");
const knex = Knex(knexFile[process.env.NODE_ENV]);
Model.knex(knex);

app.use(bodyParser.json());
app.use(morgan("combined"));

app.use("/api/users", require("./routes/users"));

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

module.exports = app;
