const mongoose = require('mongoose');

async function preSave(next) {
    try {
        if (this.parent) {
            const parent = await mongoose
                .model('categories')
                .findById(this.parent);
            parent.subCategories.push(this);
            await parent.save();

            this.pet = parent.pet;

            next();
        }
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave };
