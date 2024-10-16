import mongoose, { Document } from "mongoose"

const schema = new mongoose.Schema({
    task_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "task"
    },
    tag_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "tag"
    }
})

interface ITask_Tags extends Document {
    task_id: mongoose.Schema.Types.ObjectId,
    tag_id: mongoose.Schema.Types.ObjectId
}

const model = mongoose.models.task_tags || mongoose.model<ITask_Tags>("task_tags", schema)

export default model