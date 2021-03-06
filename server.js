import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as config from './config/config.js' // MyComments: To load the config.js
import * as db from './model/db';
import {
    userRouter
} from './routes/user.router';
import {
    taskRouter
} from './routes/task.router.js';

import {
    projectRouter
} from './routes/project.router';

import {
    parentTaskRouter
} from './routes/parentTask.router';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    const resString = 'Express: Server is responding';
    console.log(resString);
    res.send(resString)
});

app.get('/api', (req, res) => {
    const resString = 'Express: Server response for /app';
    console.log(resString);
    res.send(resString);
});

db.dbconnection()
    .then((res) => {
        console.log('MongoDB: calling connection ');
    })
    .catch((err) => {
        console.log('MongoDB: Connection call failed: ' + err);
    });

app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);
app.use('/api/projects', projectRouter);
app.use('/api/parenttask', parentTaskRouter);
// app.use('/app/parentTask', parentTask);

// console.log(process.env.port);
app.listen(process.env.port, () => {
    console.log('Express: listening on port:' + process.env.port);
});

export {
    app
};