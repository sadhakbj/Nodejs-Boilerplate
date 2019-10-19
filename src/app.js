const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const dotEnv = require("dotenv")
const Knex = require("knex")
const { Model } = require("objection")
let morgan = require("morgan")
const cors = require("cors")
dotEnv.config()
const app = express()

app.use(cors())
app.options("*", cors())

/**
 * Set up objection.
 */
const knexFile = require("./knexfile")
const knex = Knex(knexFile[process.env.NODE_ENV])
Model.knex(knex)

app.use(bodyParser.json())
app.use(morgan("combined"))

app.get("/", (req, res) => {
    res.send("Welcome to my new application")
})

app.use("/api/auth", require("./routes/auth"))
app.use("/api/users", require("./routes/users"))

module.exports = app
