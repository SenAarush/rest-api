import { Request, Response } from "express"

import Tag from "../models/projects/tag"

const readTags = async (
    req: Request,
    res: Response
): Promise<Response> => {

    return res
    .status(200)
    .json({
        message: "ok"
    })
}

const createTag = async (
    req: Request,
    res: Response
): Promise<Response> => {

    return res
    .status(200)
    .json({
        message: "ok"
    })

}

const updateTag = async (
    req: Request,
    res: Response
): Promise<Response> => {

    return res
    .status(200)
    .json({
        message: "ok"
    })

}

const deleteTag = async (
    req: Request,
    res: Response
): Promise<Response> => {

    return res
    .status(200)
    .json({
        message: "ok"
    })

}

export {

    createTag,
    readTags,
    updateTag,
    deleteTag

}
