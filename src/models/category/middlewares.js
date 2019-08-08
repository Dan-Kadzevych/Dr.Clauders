const mongoose = require('mongoose');

async function preRemove(next) {
    try {
        await mongoose.model('category').deleteMany({ parent: this.id });

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preRemove };
