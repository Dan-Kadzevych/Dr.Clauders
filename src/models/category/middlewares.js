const mongoose = require('mongoose');
const get = require('lodash/get');

async function preSave(next) {
    try {
        if (this.isModified('parent') && this.parent) {
            const parentCategory = await mongoose
                .model('category')
                .findById(this.parent);

            if (!parentCategory) {
                throw new Error('Родительской категории не существует');
            }

            this.pet = get(parentCategory, 'pet');
        }

        next();
    } catch (e) {
        next(e);
    }
}

async function preRemove(next) {
    try {
        await mongoose.model('category').deleteMany({ parent: this.id });

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preRemove, preSave };
