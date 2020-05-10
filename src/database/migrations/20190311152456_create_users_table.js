import { TBL_USERS } from '../../app/constants/dbtable'
/**
 * Run the migrations.
 */
export const up = (knex) => {
    return knex.schema.createTable(TBL_USERS, (table) => {
        table.increments()
        table.string('name').notNullable()
        table.string('username').unique().notNullable()
        table.string('email').notNullable()
        table.string('password').notNullable()

        table.timestamps(true, true)
    })
}

/**
 * Reverse the migrations.
 */
export const down = (knex) => knex.schema.dropTable(TBL_USERS)
