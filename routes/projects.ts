import express, {Router} from "express"

import * as controller from "../controllers/project"

const router: Router = express.Router()

// Add auth everywhere
router.get('/', controller.readProjects)
router.post('/', controller.createProject)
router.put('/:id', controller.updateProject)
router.delete('/:id', controller.deleteProject)

export default router
