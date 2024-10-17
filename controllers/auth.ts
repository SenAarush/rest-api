import {
    NextFunction,
    Request,
    Response
} from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

import User, { IUser } from "../models/auth/user"

const login = async (
    req: Request,
    res: Response
): Promise<Response> => {

    const { email, password } = req.body

    try {

        const user: IUser | null = await User.findOne({ email })
        if (!user) {
            return res
                .status(404)
                .json({
                    success: false,
                    message: "User has not registered, register instead"
                })
        }

        const compPassword = await bcrypt.compare(password, user.password)
        if (!compPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET ?? "thequick", {
            expiresIn: "1h"
        })

        return res.status(200).json({
            success: true,
            message: "User login successfull!",
            data: {
                token
            }
        })

    } catch (error) {
        if (error instanceof Error) {
            console.log('Error\n', error.message)
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error
            })

    }

}

const register = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> => {

    const { name, email, password } = req.body

    try {

        const user = await User.findOne({ email })
        if (user) {
            return res
                .status(400)
                .json({
                    success: false,
                    message: "User already registered, Login instead"
                })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        return res.status(201).json({
            success: true,
            message: `User:: ${name} registered successfully`
        })

    } catch (error) {

        if (error instanceof Error) {
            console.log('Error\n', error.message)
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error
            })

    }

}

const readUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> => {

    const { email } = req.body

    try {

        const user = await User.findOne({ email }, { _id: 0, name: 1, email: 1 })
        if (!user) {
            return res
                .status(200)
                .json({
                    success: false,
                    message: "User not found"
                })
        }

        return res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {

        if (error instanceof Error) {
            console.log('Error\n', error.message)
        }

        return res
            .status(500)
            .json({
                success: false,
                message: error
            })

    }

}

const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response> => {

    const { name, email, password } = req.body
    // Does not update email, to be noted

    if (!name && !password) {
        return res.status(400).json({
            success: false,
            message: "No fields provided to update"
        })
    }

    try {

        const userExists = await User.findOne({ email })
        if (!userExists) {
            return res.status(404).json({
                success: false,
                message: "JWT not updated, logout and login"
            })
        }

        let updateFields: any = {}

        if (name) updateFields.name = name
        if (password) {
            const salt = await bcrypt.genSalt(10)
            updateFields.password = await bcrypt.hash(password, salt)
        }

        const user: IUser | null = await User.findOneAndUpdate({ email }, {
            $set: updateFields
        })

        return res
            .status(200)
            .json({
                success: true,
                message: `User ${user?.name} has been updated successfully`
            })

    } catch (error) {

        if (error instanceof Error) {
            console.log('Error\n', error.message)
        }
        return res
            .status(500)
            .json({
                success: false,
                message: error
            })

    }
}

export {

    login,
    register,
    readUser,
    updateUser

}