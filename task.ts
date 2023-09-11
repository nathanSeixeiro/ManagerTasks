export class Task {
    private nameTask: string
    private descriptionTask: string
    private dateTask: Date
    private completedTask: boolean = false

    
    constructor(nameTask: string, descriptionTask: string, dateTask: Date) { 
        this.nameTask = nameTask
        this.descriptionTask = descriptionTask
        this.dateTask = dateTask
    }

    get name(): string {
        return this.nameTask
    }

    get description(): string {
        return this.descriptionTask
    }

    get date(): Date {
        return this.dateTask
    }

    get completed(): Boolean{
        return this.completed
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
        this.completed = status
    }

}