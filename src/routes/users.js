import express from 'express'
import UsersController from '../app/http/controllers/UsersController'
import userValidator from '../app/http/middlewares/validations/uservalidator'
let router = express.Router()

router.get('/', UsersController.getAll)
router.post('/store', userValidator, UsersController.create)
router.get('/:id', UsersController.show)

export default router
