const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dr_clauders', {
    useNewUrlParser: true,
    useCreateIndex: true
});
