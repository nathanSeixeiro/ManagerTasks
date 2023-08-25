export class Task {
    private readonly _userId!: string | number 
    private nameTask: string
    private descriptionTask: string
    private dateTask: Date

    constructor(nameTask: string, descriptionTask: string, dateTask: Date) { 
        this.nameTask = nameTask
        this.descriptionTask = descriptionTask
        this.dateTask = dateTask
    }

    public get name(): string {
        return this.nameTask
    }

    public get description(): string {
        return this.descriptionTask
    }

    public get date(): Date {
        return this.dateTask
    }
}