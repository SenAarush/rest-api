import express, { Router, Request, Response } from "express"

import authRoutes from "./auth"

const router: Router = express.Router()

router.use('/auth', authRoutes)

// Health Check
router.get('/', (
    req: Request,
    res: Response
) => {

    res
    .status(200)
    .json({
        message: "Server is running fine"
    })

})




export default router