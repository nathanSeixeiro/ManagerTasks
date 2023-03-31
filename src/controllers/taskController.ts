import mongoose from 'mongoose'
import taskModel from '../models/taskModel'
import Task, { ITasks } from '../models/taskModel'

class taskController{
    async store(req: Request, res: Response){
        const {nameTask, descriptionTask, dateTask } = req.body

        const createTask = await taskModel.create({
            nameTask: nameTask,
            descriptionTask: descriptionTask,
            dateTask: dateTask,
        })

        res.status(200).json(createTask)
    }

    async index(req: Request, res: Response){
        const getTasks = await taskModel.find()
        res.status(200).json(getTasks)
    }


}

export default new taskController