const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const dotEnv = require("dotenv");

dotEnv.config();
const app = express();

app.use(bodyParser.json());

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
