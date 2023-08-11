import mongoose from 'mongoose'
import taskModel from '../models/taskModel'
import Task, { ITasks } from '../models/taskModel'
import { Request, Response } from 'express'

class taskController{
//create task
    async store(req: Request, res: Response){
        const {nameTask, descriptionTask, dateTask } = req.body
        try {
            const createTask = await taskModel.create({
                nameTask: nameTask,
                descriptionTask: descriptionTask,
                dateTask: dateTask,
            })

            res.status(200).json(createTask)
        } catch (error) {
            res.status(500).json({
                error: "Registration failed",
                message: error
            })
        }
        
    }
    
//show all tasks
    async index(req: Request, res: Response){
        try {     
            const getTasks = await taskModel.find()
            res.status(200).json(getTasks)
        } catch (error) {
            res.status(500).json({
                error: "list failed",
                message: error
            })
        }
    }

//show tasks by id
    async show(req: Request, res: Response){
        const {id} = req.params

        try {          
            const task = await taskModel.findById(id)
            
            if (!task) {
                res.status(404).json({message: "not found"})        
            }
            res.status(200).json(task)
        } catch (error) {
            res.status(500).json({
                error: "Internal error",
                message: error
            })
        }
    }

//update task (by Id)
    async update(req: Request, res: Response){
        const {id} = req.params
        try { 
            await taskModel.findByIdAndUpdate(id, req.body)
            res.status(200).json({message:"updated sucessful"})
        }catch(error){
            res.status(404).json({
                error: "Internal server erro",
                message: error
            }) 
        }
    }

//delete task (by Id)
    async destroy(req: Request, res: Response){
        const { id } = req.params

        try {
            await taskModel.findByIdAndDelete(id)
            res.status(200).json({message: "task deleted sucessful"})
        } catch (error) {
            res.status(404).json({
                erro: "not found",
                message: error
            })
        }
    }
}

export default new taskController