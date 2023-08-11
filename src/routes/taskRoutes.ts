import { Router} from 'express'
import taskController from '../controllers/taskController'

export const router = Router()

router.get('/tasks',taskController.index)
router.post('/tasks', taskController.store)
router.get('/tasks/:id',taskController.show)
router.put('/tasks/:id',taskController.update)
router.delete('/tasks/:id',taskController.destroy)