import mongoose, { Document } from "mongoose"

const schema = new mongoose.Schema<ITask>({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'In-Progress', 'Completed', 'Overdue', 'Cancelled']
    },
    due_date: {
        type: Date,
        required: true
    },
    priority: {
        type: String,
        required: true,
        enum: ['High', 'Normal', 'Low']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    project_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "projects"
    }
}, { timestamps: true })

interface ITask extends Document {
    title: string,
    desc: string,
    status: 'Pending' | 'In-Progress' | 'Completed' | 'Overdue' | 'Cancelled',
    due_date: Date,
    priority: 'High' | 'Normal' | 'Low',
    user_id: mongoose.Schema.Types.ObjectId,
    project_id: mongoose.Schema.Types.ObjectId
}

const model = mongoose.models.tasks || mongoose.model<ITask>("task", schema)

export default model