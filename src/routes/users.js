import { Router } from 'express'
import UsersController from '../app/http/controllers/UsersController'
import userValidator from '../app/http/middlewares/validations/uservalidator'
import EmailSender from '../app/Services/Mail'

let router = Router()

router.get('/', UsersController.getAll)

router.get('/email', async (req, res) => {
    try {
        await EmailSender.sendMessage(
            'bijaya@bijaya.com',
            'Hello world',
            'test',
            '<h1>Test</h1>'
        )

        return res.status(200).send('Successfully sent email.')
    } catch (exception) {
        return res.status(500).send(exception.message)
    }
})

router.post('/store', userValidator, UsersController.create)
router.get('/:id', UsersController.show)

export default router
