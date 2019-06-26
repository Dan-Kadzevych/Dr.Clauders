const mongoose = require('mongoose');

async function preSave(next) {
    try {
        const parent = await mongoose
            .model('categories')
            .findOne({ subCategories: this.categoryIDs[0] });

        if (parent) {
            this.categoryIDs.push(parent.id);
        }

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave };
