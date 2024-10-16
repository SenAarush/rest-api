import mongoose, { Document } from "mongoose"

const schema = new mongoose.Schema<ITag>({
    name: {
        type: String,
        required: true
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "projects"
    }
}, { timestamps: true })

interface ITag extends Document {
    name: string,  
    project_id: mongoose.Schema.Types.ObjectId
}

const model = mongoose.models.tags || mongoose.model<ITag>('tag', schema)

export default model
