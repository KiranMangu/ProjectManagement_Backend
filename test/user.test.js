import {
    expect
} from 'chai'; // Import expect from Chai
import request from 'supertest';
import * as db from '../model/db';
import * as api from '../server';

process.env.mongoDBURL = 'Test';
const userRouter = '/api/users/'
describe('Test: User module', () => {
    before((done) => {
        db.dbconnection()
            .then(() => {
                console.log('Test: connected');
                done()
            })
            .catch((err) => {
                console.log('Test: Connection failed:' + err);
                done(err)
            });
    });


    // Create Users test
    it('Create', () => {
        request(api.app).post(userRouter + 'create')
            .send({
                firstName: 'MockGoose_FN',
                lastName: 'MockGoose_LN',
                employeeId: 'Emp004_EId'
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                done();
            })
            .catch((err) => {
                console.log('Error---------------');
                done(err);
            })
    });

    // Get all users
    it('get all users', () => {
        request(api.app).get(userRouter)
            .then((res) => {
                const body = res.body;
                console.log('body-----------');
                expect(res).to.have.status(200);
                done();
            })
    });

    // Get User by Id
    it('get user by id ', () => {
        const firstId = '5c7abf4582ecdd3ae458683f';
        request(api.app).get(userRouter + 'getUserById/' + firstId)
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.property('_id');
                expect(res).to.have.status(200);
                done();
            });
    });

    it('update', () => {
        const firstId = '5c8102754d57d00c24594074';
        request(api.app).put(userRouter + 'update/5c8102754d57d00c24594074')
            .send({
                firstName: 'Ramesh',
                lastName: 'Krishnudu',
                employeeId: 'Emp001'
            })
            .then((res) => {
                const body = res.body;
                expect(body).to.contain.prototype('firstName:Ramesh');
                done();
            });
    });

    // it('delete', () => {
    //     request(api.app).delete(userRouter + 'delete')
    //         .send({
    //             _id: ''
    //         })
    //         .then((res) => {
    //             const body = res.body;
    //             expect(body).to.contain.prototype('');
    //             done();
    //         })
    // });

    // // Update Status
    // it('update status', () => {
    //     request(api.app).post(userRouter + 'update/references')
    //         .send({
    //             id: ''
    //         })
    //         .then((res) => {
    //             const body = res.body;
    //             expect(body).to.contain.property('');
    //             done();
    //         })
    // });

    after((done) => {
        db.close()
            .then(() => {
                console.log('Test: Connection Closed');
                done()
            })
            .catch((err) => {
                console.log('Test: Connection closed failed' + err);
                done(err)
            });
    });

});