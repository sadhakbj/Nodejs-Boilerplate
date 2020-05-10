import { TBL_USERS } from '../../app/constants/dbtable'

/**
 * Run the database seeds.
 */
export const seed = (knex) => {
    return knex(TBL_USERS)
        .del()
        .then(() => {
            return knex(TBL_USERS).insert([
                {
                    name: 'Bijaya Kuikel',
                    username: 'bijaya.kuikel',
                    email: 'bijaya@bijaya.com',
                    password:
                        '$2b$12$P5eHEuLpnmZcPHCcWs7Al.V/qgBHEUesYQslvCws4unFNIjhEOyAu', //password
                },
            ])
        })
}
