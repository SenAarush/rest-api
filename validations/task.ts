import { z } from "zod";

const taskValidationSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    desc: z.string().min(1, { message: "Description is required" }),
    status: z.enum(['pending', 'in_progress', 'completed', 'overdue', 'cancelled'], {
        required_error: "Status is required"
    }),
    due_date: z.date({
        required_error: "Due date is required"
    }),
    priority: z.enum(['high', 'low', 'normal'], {
        required_error: "Priority is required"
    }),
    user_id: z.string().length(24, { message: "Invalid user ID" }), // Assuming ObjectId as a 24 character hex string
    project_id: z.string().length(24, { message: "Invalid project ID" }) // Assuming ObjectId as a 24 character hex string
});

// Export the validation schema for use
export default taskValidationSchema;
