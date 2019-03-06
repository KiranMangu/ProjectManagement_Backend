import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

export function dbconnection() {
    mongoose.connect(process.env.mongoDBURL, {
        useNewUrlParser: true,
        useCreateIndex: true // MyComments: To supress the warning: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
    });
    const connection = mongoose.connection;
    // autoIncrement.initialize(connection);

    connection.on('error', (errMsg) => {
        const resString = 'Mongoose: Failed connecting MongoDB' + errMsg;
        console.log(resString);
    });

    connection.once('open', () => {
        const resString = 'Mongoose: Connection opened on MongoDB';
        console.log(resString);
    });

    connection.on('connected', () => {
        const resString = 'Mongoose: Connected successfully';
        console.log(resString);
    })
    connection.on('disconnected', () => {
        const resString = 'Mongoose: Disconnected..!!!'
        console.log(resString);
    });
}