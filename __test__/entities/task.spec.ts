import { Task } from "../../src/domain/entities/task-model"

describe('Task Entity', () =>{
    const makeSut = () => {
        const sut = new Task('test','test instance', new Date() )
        return sut
    }

    test('instance class correctly',() => {
        const task = makeSut()
        const taskMatch = {
            nameTask: 'test',
            descriptionTask: 'test instance',
            dateTask: new Date(),
            completedTask: false
        }
        expect(task).toMatchObject(taskMatch)
    })

    test('set and get nameTask', () => {
        const task = makeSut()
        task.name = 'testado'
        expect(task.name).toBe('testado')
    })
    test('set and get descriptionTask', () => {
        const task = makeSut()
        task.description = 'change desc'
        expect(task.description).toBe('change desc')
    })
    test('set and get dateTask', () => {
        const task = makeSut();
        const currentDate = new Date();
        task.date = currentDate;
        expect(task.date).toEqual(currentDate);
      });  
    test('set and get completedTask', () => {
        const task = makeSut()
        task.completed = true
        expect(task.completed).toBe(true)
    })
})