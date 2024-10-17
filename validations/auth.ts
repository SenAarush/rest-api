import { z } from 'zod'

const registerSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1)
})

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

const readUserSchema = z.object({
    email: z.string().email().min(1)
})

const updateUserSchema = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().min(1).optional(),
    password: z.string().min(6).optional()
})

export {

    registerSchema,
    loginSchema,
    readUserSchema,
    updateUserSchema

}
