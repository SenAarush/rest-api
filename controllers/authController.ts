import { Request, Response } from "express"

const login = (req: Request, res: Response) => {
    res
    .status(200)
    .json({
        message: "Login successful"
    })
}

const register = (req: Request, res: Response) => {
    
}

export {
    login,
    register
}