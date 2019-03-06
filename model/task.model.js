import mongoose from 'mongoose';
import Project from './project.model';

const Schema = mongoose.Schema;
const taskSchema = new Schema({
    // _id = task_id
    // taskId: {
    //     type: Schema.Types.ObjectId
    // },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: false
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    task: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: 'open'
    }
});

export default mongoose.model('Task', taskSchema);