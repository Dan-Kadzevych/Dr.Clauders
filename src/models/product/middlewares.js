const mongoose = require('mongoose');
const uniq = require('lodash/uniq');
const compact = require('lodash/compact');

async function preSave(next) {
    try {
        if (this.isModified('categoryIDs')) {
            const categories = await mongoose
                .model('category')
                .find({ _id: { $in: this.categoryIDs } })
                .lean();

            const parentCategories = categories.map(
                category => category.parent
            );

            this.categoryIDs = uniq(
                compact([...parentCategories, ...this.categoryIDs])
            );
        }

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave };
