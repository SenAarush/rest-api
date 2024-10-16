import mongoose, { Document } from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
   }

}, {timestamps: true})

interface IProject extends Document {
    name: string,
    user_id: string
}

const model = mongoose.models.projects || mongoose.model<IProject>("project", schema)

export default model
