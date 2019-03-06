import User from '../model/user.model';

function getAllUsers(req, res) {
    const resString = 'verb:get, uri:/users'
    console.log(resString);

    User.find({}, (error, users) => {
        if (error) {
            console.log('error');
            res.status(400).json({
                'user': 'Unable to get Users'
            });
        } else {
            console.log('response');
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
    User.findOneAndUpdate({
        _id: id
    }, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        employeeId: req.body.employeeId
    }, (error, user) => {
        if (error) {
            res.status(400).json({
                'user': 'Unable to update user by id'
            });
        } else {
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

function updateUserProjectTask(req, res) {
    User.findByIdAndUpdate({
        _id: req.body.userId
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

function updateUserProject (req, res){
    User.findByIdAndUpdate({
        _id: req.body.userId
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

export {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser,
    updateUserProjectTask,
    updateUserProject
}