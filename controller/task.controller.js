import Task from '../model/task.model';
import ParentTask from '../model/parenttask.model';
import * as UserController from '../controller/user.controller';

function getAllTasks(req, res) {
    Tasks.find({}, (error, tasks) => {
        if (error) {
            res.status(400).json({
                'Tasks': 'Unable to get Tasks'
            });
        } else {
            res.status(200).send(tasks);
        }
    });
}

function getTaskById(req, res) {
    let id = req.params.id;

    Tasks.findById({
        _id: id
    }, (error, task) => {
        if (error) {
            res.status(400).json({
                'Tasks': 'Unable to get Task by Id'
            });
        } else {
            res.status(200).send(task);
        }
    });
}

function createTask(req, res) {
    let newTask = new Task(req.body);
    newTask.save()
        .then(task => {
            res.status(200).json({
                'Task': 'Successfully created a Task'
            });
        })
        .catch(error => {
            res.status(400).json({
                'Task': 'Failed creating a Task'
            });
        });
}

function updateTaskById(req, res) {
    let id = req.body.id;
    Task.findByIdAndUpdate({
        _id: id
    }, {
        /*
        taskId  task        startDate        endDate        priority        status
        parentId        projectId
        */
        task: req.body.task,
        priority: req.body.priority,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        status: req.body.status,

        //
        // parentTask: req.params.parentTask,
        // user: req.params.user,
        // parentId: req.body.parentId,
        // projectId: req.body.projectId,
    }, (error, task) => {
        if (error) {
            res.status(400).json({
                'Task': 'Failed updating task details'
            });
        } else {
            // MyComments: Update user details with project and Task
            UserController.updateUserTask(req, res);
            res.status(200).json({
                'Task': 'Successfully updated task detail'
            })

        }
    });
}

function updateTaskStatusToComplete(req, res) {
    Task.findByIdAndUpdate({
        _id: req.body.id
    }, {
        status: 'Completed'
    }, (error, task) => {
        if (error) {
            res.status(400).json({
                'Task': 'Failed updating status as Completed'
            });
        } else {
            res.status(200).json({
                'Task': 'Updated status as Completed'
            });
        }
    });
}

export {
    getAllTasks,
    getTaskById,
    createTask,
    updateTaskById,
    updateTaskStatusToComplete
}