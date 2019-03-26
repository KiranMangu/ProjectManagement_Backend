import User from '../model/user.model';
import mongoose from 'mongoose';

function getAllUsers(req, res) {
    const resString = 'verb:get, uri:/users'
    // console.log(resString);

    User.find({}, (error, users) => {
        if (error) {
            console.log('error');
            res.status(400).json({
                'user': 'Unable to get Users'
            });
        } else {
            // console.log('response');
            res.status(200).send(users);
        }
    });
}

function getUserById(id, req, res) {
    User.find({
        _id: id
    }, (error, user) => {
        if (error) {
            res.status(400).json({
                'user': 'Unable to get user by id'
            });
        } else {
            res.status(200).send(user);
        }
    });
}

function updateUserById(id, req, res) {
    // console.log('Test: ' + id);
    // console.log('Test: ' + mongoose.Types.ObjectId(id));
    User.findOneAndUpdate({
        _id: id
    }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            employeeId: req.body.employeeId
        }, (error, user) => {
            if (error) {
                res.status(400).json({
                    'user': 'Unable to update user by id' + error
                });
            } else {
                console.log('Update');
                res.status(200).send(user);
            }
        });
}

function deleteUserById(id, req, res) {
    User.deleteOne({
        _id: id
    }, (error) => {
        if (error) {
            res.status(400).json({
                'user': 'Unable to Delete user by Id'
            });
        } else {
            res.status(200).send('Deleted the user successfully');
        }
    });
}

function createUser(newUser, req, res) {
    newUser.save()
        .then(user => {
            res.status(200).json({
                'user': 'User added successfully'
            });
        })
        .catch(error => {
            res.status(400).json({
                'user': 'Failed inserting the user'
            });
        });
}

function updateUserTask(req, res) {
    User.findByIdAndUpdate({
        _id: req.body._id
    }, {
            projectId: req.body.projectId,
            taskId: req.body.taskId
        }, (error, user) => {
            if (error) {
                res.status(400).json({
                    'user': 'Failed updating project, task details'
                });
            } else {
                res.status(200).json({
                    'User': 'Successfully updated project, task details'
                });
            }
        });
}

function updateUserProjectTask(req, res) {
    User.findByIdAndUpdate({
        _id: req.body._id
    }, {
            projectId: req.body.projectId,
            taskId: req.body.taskId
        }, (error, user) => {
            if (error) {
                res.status(400).json({
                    'user': 'Failed updating project'
                });
            } else {
                res.status(200).json({
                    'User': 'Successfully updated project'
                });
            }
        });
}

function updateUserProject(req, res) {
    User.findByIdAndUpdate({
        _id: req.body._id
    }, {
            projectId: req.body.projectId,
        }, (error, user) => {
            if (error) {
                res.status(400).json({
                    'user': 'Failed updating project'
                });
            } else {
                res.status(200).json({
                    'User': 'Successfully updated project'
                });
            }
        });
}

// function getUserByProjectId(id, res) {
//     User.find({
//         projectId: id
//     }, (error, user) => {
//         if (error) {
//             res.status(400).json({
//                 'user': 'Unable to get user by id'
//             });
//         } else {
//             res.status(200).send(user);
//         }
//     });
// }

export {
    getAllUsers,
    getUserById,
    // getUserByProjectId,
    updateUserById,
    deleteUserById,
    createUser,
    updateUserTask,
    updateUserProject,
    updateUserProjectTask
}