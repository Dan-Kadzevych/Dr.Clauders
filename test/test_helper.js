const mongoose = require('mongoose');

before(done => {
    mongoose.connect('mongodb://localhost:27017/dr_clauders_test', {
        useNewUrlParser: true
    });
    mongoose.connection.once('open', () => done()).on('error', err => err);
});

beforeEach(async () => {
    await mongoose.connection.collections.products.drop();
});
