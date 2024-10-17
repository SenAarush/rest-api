import mongoose, { Document } from "mongoose"

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

export interface IUser extends Document {
    name: string
    email: string
    password: string
}

const model = mongoose.models.users || mongoose.model<IUser>('user', schema)

export default model