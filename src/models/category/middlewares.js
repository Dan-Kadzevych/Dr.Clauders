const mongoose = require('mongoose');

async function preSave(next) {
    try {
        if (this.parent && this.isModified('parent')) {
            const parent = await mongoose
                .model('category')
                .findById(this.parent);

            if (!parent) {
                throw new Error('Parent not found');
            }

            parent.subCategories.push(this);
            await parent.save();

            this.pet = parent.pet;
        }

        next();
    } catch (e) {
        next(e);
    }
}

async function preRemove(next) {
    try {
        await mongoose
            .model('category')
            .deleteMany({ _id: { $in: this.subCategories } });

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave, preRemove };
