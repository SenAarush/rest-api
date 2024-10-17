import express, { Router, Request, Response, NextFunction } from "express"

import authRoutes from "./auth"
import tagRoutes from "./tags"
import taskRoutes from "./tasks"
import projectRoutes from "./projects"

const router: Router = express.Router()

router.use('/auth', authRoutes)
router.use('/tags', tagRoutes)
router.use('/tasks', taskRoutes)
router.use('/projects', projectRoutes)

// Health Check
router.get('/', (
    req: Request,
    res: Response,
): Response => {

    return res
        .status(200)
        .json({
            message: "Server is running fine"
        } as { message: string })

})




export default router