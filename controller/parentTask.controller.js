import ParentTask from '../model/parenttask.model';

function createParentTask(req, res) {
    let newParentTask = new ParentTask(req.body);
    // console.log('newParentTask:'+ JSON.stringify(req.body));
    newParentTask.save()
        .then(task => {
            // console.log('Inserted...')
            res.status(200).json({
                'parenttask': task,
                'ParentTask': 'Successfully save Parent Task'
            });
        })
        .catch(error => {
            console.log('error:' + error);
            res.status(400).json({
                'ParentTask': 'Failed saving Parent Task ' + error
            })
        });
}

function updateParenTsk(req, res) {
    ParentTask.findByIdAndUpdate({
        _id: req.body.id
    }, {
            parentTask: req.body.parentTask
        }, (error, parentTask) => {
            if (error) {
                res.status(400).json({
                    'ParentTask': 'Failed getting Parent Task by Id'
                });
            } else {
                res.status(200).send(parentTask);
            }
        });
}

function getAllParentTasks(req, res) {
    ParentTask.find({}, (error, parentTasks) => {
        if (error) {
            res.status(400).json({
                'ParentTask': 'Failed getting all parent tasks' + error
            });
        } else {
            res.status(200).send(parentTasks);
        }
    });
}

function getParentTaskById(req, res) {
    ParentTask.find({
        _id: req.params.id
    }, (error, parentTask) => {
        if (error) {
            res.status(400).json({
                'ParentTask': 'Failed getting Parent Task by Id'
            });
        } else {
            res.status(200).send(parentTask);
        }
    });
}

function updateParentTaskById(req, res) {
    ParentTask.findByIdAndUpdate({
        _id: req.body.id
    }, {
            parentTask: req.body.parentTask
        }, (error, task) => {
            if (error) {
                res.status(400).json({
                    'ParentTask': 'Failed updating Parent Task by Id'
                });
            } else {
                res.status(200).json({
                    'ParentTask': 'Successfully updated Parent Task by Id'
                });
            }
        });
}

export {
    getAllParentTasks,
    getParentTaskById,
    updateParentTaskById,
    createParentTask,
    updateParenTsk
}