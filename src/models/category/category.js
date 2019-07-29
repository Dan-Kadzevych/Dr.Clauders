const mongoose = require('mongoose');
const { preSave } = require('./middlewares');

const CategorySchema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: true },
    slug: { type: 'String', required: true, trim: true, unique: true },
    subCategories: [{ type: 'ObjectId', ref: 'category' }],
    parent: {
        type: 'ObjectId',
        default: null,
        ref: 'category'
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

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
