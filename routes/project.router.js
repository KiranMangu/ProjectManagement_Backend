import express from 'express';
import * as ProjectController from '../controller/project.controller';

const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
    const resString = 'verb:get, uri:/projects';
    console.log(resString);
    res.send(resString);
    ProjectController.getAllProjects(req, res);
});

projectRouter.get('/:id', (req, res) => {
    ProjectController.getProjectById(req, res);
});

projectRouter.post('/create', (req, res) => {
    ProjectController.createProject(req, res);
});

projectRouter.post('/update', (req, res) => {
    ProjectController.updateProjectById(req, res);
});

export {
    projectRouter
};