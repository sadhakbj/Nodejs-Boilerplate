import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import Knex from 'knex'
import morgan from 'morgan'
import { Model } from 'objection'
import knexFile from './knexfile'
import authRoutes from './routes/auth'
import userRoutes from './routes/users'

const app = express()
app.use(cors())
app.options('*', cors())

/**
 * Set up objection.
 */
const knex = Knex(knexFile['development'])
Model.knex(knex)

app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Welcome to my new application')
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)

export default app
