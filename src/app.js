import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import Knex from 'knex'
import morgan from 'morgan'
import { Model } from 'objection'
import knexFile from './knexfile'
import routes from './routes'

class Application {
    app
    constructor() {
        this.app = express()
        this.installRoutes()
        this.installServies()
        this.installDatabase()
    }

    installServies() {
        this.app.use(cors())
        this.app.options('*', cors())
        this.app.use(bodyParser.json())
        this.app.use(morgan('combined'))
    }

    installDatabase() {
        const knex = Knex(knexFile['development'])
        Model.knex(knex)
    }

    installRoutes() {
        this.app.use('/api', routes)

        this.app.use('*', (req, res, next) => {
            res.status(404).json({
                success: false,
                message: 'Item / page you are looking could not be found.',
            })
        })
    }
}
export default new Application()
