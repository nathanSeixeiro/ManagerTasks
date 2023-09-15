import { Task } from "@/domain/entities";

describe('create usecase', () => {
    const makeSut = () => {
        const sut = new Task('test','test instance', new Date() )
        return sut
    }
})