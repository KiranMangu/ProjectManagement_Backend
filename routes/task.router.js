import express from 'express';
import * as TaskController from '../controller/task.controller';

const taskRouter = express.Router();

// Get all Tasks 
taskRouter.get('/', (req, res) => {
    const resString = 'verb:get, uri:/tasks';
    // console.log(resString);
    // res.send(resString);
    TaskController.getAllTasks(req, res);

});

// Get task by Id
taskRouter.get('/:id', (req, res) => {
    TaskController.getTaskById(req, res);
});

// create Task
taskRouter.post('/create', (req, res) => {
    // TODO: Create parent task entry
    TaskController.createTask(req, res);
});

// update by Id
taskRouter.put('/update', (req, res) => {
    TaskController.updateTaskById(req, res);
});

//update status
taskRouter.post('/updateTaskStatus', (req, res) => {
    console.log('UpdateStatus:' + JSON.stringify(req.body));
    TaskController.updateTaskStatusToComplete(req, res);
});

taskRouter.get('/tasksByProjectId/:id', (req, res) => {
    TaskController.getAllTasksByProjectId(req, res);
});

export {
    taskRouter
};