export interface IRead<T>{
    findAll(): Array<T[]>
    findById(id: string): Promise<T>
}