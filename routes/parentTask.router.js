import express from 'express';

const parentTaskRouter = express.Router();

parentTaskRouter.get('/parenttasks', (req, res) => {
    const resString = 'verb:get, uri:/parenttasks';
    console.log(resString);
    res.send(resString);
});

export {
    parentTaskRouter
};