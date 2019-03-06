import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import * as config from './config/config.js' // MyComments: To load the config.js
import {
    dbconnection
} from './model/db';
import {
    userRouter
} from './routes/user.router';
import {
    taskRouter
} from './routes/task.router.js';

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

dbconnection();

app.use('/api/users', userRouter);
app.use('/app/tasks', taskRouter);
// console.log(process.env.port);
app.listen(process.env.port, () => {
    console.log('Express: listening on port:' + process.env.port);
});