import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const parenttaskSchema = new Schema({
    // parentId: {
    //     type: Schema.Types.ObjectId,
    // },
    parentTask: {
        type: String,
        required: true
    }
});

export default mongoose.model('Parenttask', parenttaskSchema);