import Project from '../model/project.model';
import Usercontroller from '../controller/user.controller';

function getAllProjects(req, res) {
    Project.find({}, (error, projects) => {
        if (error) {
            res.status(400).json({
                'Project': 'Failed getting projects'
            });
        } else {
            res.status(200).send(projects);
        }
    });
}

function getProjectById(req, res) {
    Project.find({
        _id: req.params.id
    }, (error, project) => {
        if (error) {
            res.status(400).json({
                'Project': 'Failed getting project by Id'
            });
        } else {
            Usercontroller.updateUserProject(req);
            res.status(200).send(project);
        }
    });
}

function createProject(req, res) {
    let newProject = new Project(req.body)
    newProject.save()
        .then(project => {
            res.status(200).json({
                'Project': 'Successfully created project'
            });
        })
        .catch(error => {
            res.status(400).json({
                'Project': 'Failed creating a project'
            });
        })
}

function updateProjectById(req, res) {
    Project.findByIdAndUpdate({
        _id: req.body.id
    }, {
        project: req.body.project,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        priority: req.body.priority
    }, (error, project) => {
        if (error) {
            res.status(400).json({
                'Project': 'Failed updating project by Id'
            });
        } else {
            Usercontroller.updateUserProject(req);
            res.status(200).json({
                'Project': 'Successfully updated project by Id'
            });
        }
    });
}

export {
    getAllProjects,
    getProjectById,
    createProject,
    updateProjectById
}