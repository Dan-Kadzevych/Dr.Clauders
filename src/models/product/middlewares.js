const mongoose = require('mongoose');
const uniq = require('lodash/uniq');

async function preSave(next) {
    try {
        const parent = await mongoose
            .model('category')
            .findOne({ subCategories: this.categoryIDs.reverse()[0] });

        if (parent && !this.categoryIDs.includes(parent.id)) {
            this.categoryIDs.unshift(parent.id);
        }

        this.categoryIDs = uniq(this.categoryIDs);

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave };
