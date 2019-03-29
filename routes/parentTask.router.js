import express from 'express';
import * as ParentTaskController from '../controller/parentTask.controller';
// import { Parenttask } from '../model/parenttask.model';
const parentTaskRouter = express.Router();

parentTaskRouter.get('/', (req, res) => {
    const resString = 'verb:get, uri:/parenttasks';
    // console.log(resString);
    // res.send(resString);
    ParentTaskController.getAllParentTasks(req, res);
});

parentTaskRouter.post('/create', (req, res) => {
    ParentTaskController.createParentTask(req, res);
});

parentTaskRouter.get('/:id', (req, res) => {
    ParentTaskController.getParentTaskById(req, res);
});

parentTaskRouter.post('/', (req, res) => {
    ParentTaskController.updateParentTaskById(req, res);
});

parentTaskRouter.post('/update', (req, res) => {
    ParentTaskController.updateParenTsk(req, res);
});

export {
    parentTaskRouter
};