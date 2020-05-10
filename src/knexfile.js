import dbConfig from './config/database'

module.exports = {
    development: {
        client: dbConfig.client,
        connection: {
            host: dbConfig.host,
            port: dbConfig.port,
            database: dbConfig.database,
            user: dbConfig.username,
            password: dbConfig.password,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'migrations',
            directory: './database/migrations',
        },
        seeds: {
            directory: './database/seeds',
        },
    },
}
