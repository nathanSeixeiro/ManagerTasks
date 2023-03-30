import mongoose from 'mongoose'
import Task, { ITasks } from '../models/taskModel'

class taskController{
    createTask(req: Request, res: Response){

        const newTask: ITasks = new Task({
            nameTask: 'Nova Tarefa',
            descriptionTask: 'Descrição da nova tarefa',
            dateTask: new Date('2023-04-01'),
        });
        console.log(newTask)
    }
}

export default taskController