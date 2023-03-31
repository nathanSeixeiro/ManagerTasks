import { Router, Request, Response} from 'express'
import taskController from '../controllers/taskController'

export const router = Router()

router.get('/tasks',taskController.index)

router.post('/tasks', taskController.store)