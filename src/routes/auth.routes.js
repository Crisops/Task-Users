import { Router } from 'express'
import { register, login, logout, profile } from '../controllers/auth.controller.js'
import { authRequired } from '../middlewares/validateToken.js'
import { validationShema } from '../middlewares/validator.middleware.js'
import { registerSchema, loginSchema } from '../schemas/auth.schema.js'

const router = Router()

router.post('/register', validationShema(registerSchema), register)
router.post('/login', validationShema(loginSchema), login)
router.post('/logout', logout)
router.get('/profile', authRequired, profile)

export default router
