import { Router } from 'express'
import { authRequired } from '../middlewares/validateToken.js'
import { getTask, createTask, deleteTask, tasks, updateTask } from '../controllers/tasks.controller.js'
import { validationShema } from '../middlewares/validator.middleware.js'
import { taskSchema } from '../schemas/task.shema.js'

const router = Router()

router.get('/tasks', authRequired, tasks)
router.get('/tasks/:id', authRequired, getTask)
router.post('/tasks', authRequired, validationShema(taskSchema), createTask)
router.put('/tasks/:id', authRequired, updateTask)
router.delete('/tasks/:id', authRequired, deleteTask)

export default router
