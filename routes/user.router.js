import express from 'express';
import User from '../model/user.model';
import * as UserContorller from '../controller/user.controller';

const userRouter = express.Router();
// Getall Users
userRouter.get('/', (req, res) => {
    UserContorller.getAllUsers(req, res);
});

// Get User by Id
userRouter.get('/:id', (req, res) => {
    let id = req.params.id;
    UserContorller.getUserById(id, req, res);
    // let id = "5c7abf4582ecdd3ae458683f";

});

// Update by user Id
userRouter.post('/update', (req, res) => {
    // TODO: Check if update can be done only for changed fields though all fields are sent with outofbox feature on mongoose
    let id = req.body.id;
    // console.log(req.body.firstName);
    // console.log(req.body.lastName);
    // console.log(req.body.employeeId);
    UserContorller.updateUserById(id, req, res);

});

// Delete user by Id
userRouter.delete('/delete', (req, res) => {
    let id = req.body.id;
    UserContorller.deleteUserById(id, req, res);
});

// Create User
userRouter.post('/create', (req, res) => {
    let newUser = new User(req.body);
    console.log(req.body);
    UserContorller.createUser(newUser, req, res);
});

userRouter.post('/update/references', (req, res) => {
    let _id = req.body.id;
    UserContorller.updateUserProjectTask(id, req, res)
});

export {
    userRouter
};