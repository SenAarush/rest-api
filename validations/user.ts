import { z } from "zod";

const userValidationSchema = z.object({
    name: z.string()
        .min(1, { message: "Name is required" }) // Ensure name is provided
        .max(50, { message: "Name must be at most 50 characters long" }), // Optional: Maximum length

    email: z.string()
        .email({ message: "Invalid email format" }) // Validate email format
        .min(1, { message: "Email is required" }) // Ensure email is provided
        .max(100, { message: "Email must be at most 100 characters long" }), // Optional: Maximum length

    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" }) // Ensure password meets minimum length
        .max(128, { message: "Password must be at most 128 characters long" }) // Optional: Maximum length
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" }) // Optional: Require uppercase letter
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" }) // Optional: Require lowercase letter
        .regex(/[0-9]/, { message: "Password must contain at least one number" }) // Optional: Require number
        .regex(/[@$!%*?&]/, { message: "Password must contain at least one special character" }), // Optional: Require special character
});

// Export the validation schema for use
export default userValidationSchema;
