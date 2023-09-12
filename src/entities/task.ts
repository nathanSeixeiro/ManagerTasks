export class Task {
    private nameTask: string
    private descriptionTask: string
    private dateTask: Date | number
    private completedTask: boolean

    constructor(nameTask: string, descriptionTask: string, dateTask: number | Date) { 
        this.nameTask = nameTask
        this.descriptionTask = descriptionTask
        this.dateTask = dateTask
        this.completedTask = false
    }

    get name(): string {
        return this.nameTask
    }

    get description(): string {
        return this.descriptionTask
    }

    get date(): Date|number {
        return this.dateTask
    }

    get completed(): boolean {
        return this.completedTask
    }

    set name(name: string){
        this.nameTask = name
    }
    set description(desc: string){
        this.descriptionTask = desc
    }

    set date(date: Date){
        this.dateTask = date
    }

    set completed(status: boolean){
        this.completedTask = status
    }

}