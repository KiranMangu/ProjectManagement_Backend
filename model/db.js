import mongoose from 'mongoose';
import {
    Mockgoose
} from 'mockgoose';
// import autoIncrement from 'mongoose-auto-increment';

export function dbconnection() {
    return new Promise((resolve, reject) => {
        if (process.env.mongoDBURL === 'Test') {
            const mockgoose = new Mockgoose(mongoose);
            mockgoose.prepareStorage()
                .then((res, err) => {
                    mongoose.connect(process.env.mongoDBURL, {
                        useNewUrlParser: true,
                        useCreateIndex: true // MyComments: To supress the warning: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
                    });
                    // .then((res, err) => {
                    //     if (err)
                    //         reject(err);
                    //     resolve();
                    // });
                    if (err)
                        reject(err);
                    resolve();
                });
        } else {
            mongoose.connect(process.env.mongoDBURL, {
                    useNewUrlParser: true,
                    useCreateIndex: true // MyComments: To supress the warning: DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
                })
                .then((res, err) => {
                    if (err)
                        reject(err);
                    resolve();
                });

        }

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
    });
}

export function close() {
    return mongoose.disconnect();
}