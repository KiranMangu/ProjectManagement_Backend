import mongoose from 'mongoose';
import Task from './task.model';
import Project from './project.model';
// import autoIncrement from 'mongoose-auto-increment'; // MyComments: Auto-Increment

const Schema = mongoose.Schema; // MyComments: Throwing error on: const userSchema = new mogoose.Schema({....}) 
const userschema = new Schema({
    // _id = user_id
    // userId: {
    //     type: Schema.Types.ObjectId
    // },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: false
    },
    taskId: {
        type: Schema.Types.ObjectId,
        ref: 'Task',
        required: false
    },
});

// MyComments: Auto-Increment
// userschema.plugin(autoIncrement.plugin, {
//     model: 'userschema',
//     field: 'userId'
// });

export default mongoose.model('User', userschema);