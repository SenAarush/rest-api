import { Request, Response } from "express"

import Project from "../models/projects/project"

const createProject = (
    req: Request,
    res: Response
): Response => {

    return res
    .status(200)
    .json({
        message: "ok"
    })
}

const readProjects = (
    req: Request,
    res: Response
): Response => {

    return res
    .status(200)
    .json({
        message: "ok"
    })
}

const updateProject = (
    req: Request,
    res: Response
): Response => {

    return res
    .status(200)
    .json({
        message: "ok"
    })
}

const deleteProject = (
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
    
    createProject,
    readProjects,
    updateProject,
    deleteProject

}