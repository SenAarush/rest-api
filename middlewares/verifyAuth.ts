import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const verifyAuth = (
    req: Request,
    res: Response,
    next: NextFunction
): Response | void => {

    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access Denied"
        })
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET ?? "thequick") as { email: string }
        req.body.email = verified.email
        next()

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Invalid Token"
        })
    }

}

export default verifyAuth