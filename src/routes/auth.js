import express from 'express'
import AuthController from '../app/http/controllers/AuthController'
import validateLogin from '../app/http/middlewares/validations/loginvalidator'
let router = express.Router()

router.post('/login', validateLogin, AuthController.login)
router.post('/forgot-password', AuthController.requestPasswordReset)

export default router
