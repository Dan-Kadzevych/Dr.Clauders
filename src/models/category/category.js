const mongoose = require('mongoose');
const { preSave } = require('./middlewares');

const CategorySchema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: true },
    slug: { type: 'String', required: true, trim: true, unique: true },
    subCategories: [{ type: 'ObjectId', ref: 'categories' }],
    parent: {
        type: 'ObjectId',
        default: null,
        ref: 'categories'
    },
    pet: {
        type: 'String',
        required() {
            return !this.parent;
        },
        trim: true
    },
    pos: { type: 'Number', default: 0 },
    media: {
        background: { type: 'String', required: () => !this.parent },
        icon: { type: 'String', required: () => this.parent }
    }
});

CategorySchema.pre('save', preSave);

const Category = mongoose.model('categories', CategorySchema);

module.exports = Category;
