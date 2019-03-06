import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const projectSchema = new  Schema({
    // _id = project_id
    // projectId: {
    //     type: Schema.Types.ObjectId
    // },
    project: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    EndDate: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Project', projectSchema);