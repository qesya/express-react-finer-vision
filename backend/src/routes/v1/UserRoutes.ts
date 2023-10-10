import express from 'express'
import UserController from '../../controllers/UserController'
import { createUserValidation } from '../../middlewares/userValidationMiddleware'

const router = express.Router()

router.post('/', createUserValidation, UserController.createUser)
router.get('/', UserController.getAllUsers)
router.get('/:userId', UserController.getUserById)

export default router
