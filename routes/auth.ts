import express from "express"

import * as controller from "../controllers/auth"
import verifyAuth from "../middlewares/verifyAuth"
import validate from "../middlewares/validate"
import {
    registerSchema,
    loginSchema,
    readUserSchema,
    updateUserSchema
} from "../validations/auth"

import { z } from "zod"

const router = express.Router()



router.post(('/register'), validate(registerSchema), controller.register)
router.post('/login', validate(loginSchema), controller.login)
router.get('/users/me', verifyAuth, validate(readUserSchema), controller.readUser)
router.put('/users/me', verifyAuth, validate(updateUserSchema), controller.updateUser)

export default router