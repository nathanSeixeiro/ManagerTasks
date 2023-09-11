import { Task } from "./task"

describe('Task Entity', () =>{
    test('instance class correctly',() => {
        const currentDate = Date.now()
        const task = new Task('test','test instance', currentDate )
        
    })
})