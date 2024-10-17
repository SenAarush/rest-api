import { Request, Response } from "express"

// Filter by project, status, etc
import Task from "../models/projects/task"


const createTask = (
    req: Request,
    res: Response
): Response => {

    return res
        .status(200)
        .json({
            message: "ok"
        })

}

const readTasks = (
    req: Request,
    res: Response
): Response => {

    return res
        .status(200)
        .json({
            message: "ok"
        })

}

const updateTask = (
    req: Request,
    res: Response
): Response => {

    return res
        .status(200)
        .json({
            message: "ok"
        })

}

const deleteTask = (
    req: Request,
    res: Response
): Response => {

    return res
        .status(200)
        .json({
            message: "ok"
        })

}

export {

    createTask,
    readTasks,
    updateTask,
    deleteTask

}