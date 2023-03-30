import mongoose, { Document, Schema } from 'mongoose';

export interface ITasks extends Document {
    nameTask: string,
    descriptionTask: string,
    dateTask: Date,
    createdAt: Date,
    upadateAt: Date
}

const taskSchema: Schema = new Schema({
    nameTask: {
        type: String,
        required: true
    },
    descriptionTask: {
        type: String,
        required: true
    },
    dateTask: {
        type: Date,
        required: true
    },
},
    { timestamps: true },
)

export default mongoose.model<ITasks>('Task', taskSchema);