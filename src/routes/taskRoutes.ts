import { Router, Request, Response} from 'express'
import taskController from '../controllers/taskController'

export const router = Router()

router.get('/', (req: Request, res: Response) =>{
    console.log('salve')
    res.send('salve')
})
// router.get('/tasks', taskController)