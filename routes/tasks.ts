import express, { Router } from "express"

import * as controller from "../controllers/task"

const router: Router = express.Router()

router.get('/', controller.readTasks)
router.post('/', controller.createTask)
router.put('/:id', controller.updateTask)
router.delete('/:id', controller.deleteTask)

export default router