import mongoose, { Document } from "mongoose"
import { z } from "zod"

const userValidationSchema = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
})

const schema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true })

interface IUser extends Document {
    name: string
    email: string
    password: string
}

const model = mongoose.models.users || mongoose.model<IUser>('user', schema)

export default {
    userValidationSchema,
    model
}