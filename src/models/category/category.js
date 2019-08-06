const mongoose = require('mongoose');

const { preSave, preRemove } = require('./middlewares');
const { update } = require('./methods');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
            trim: true
        },
        slug: { type: 'String', required: true, trim: true, unique: true },
        subCategories: [{ type: 'ObjectId', ref: 'category' }],
        pet: {
            type: 'String',
            required: true,
            trim: true,
            enum: ['Cat', 'Dog']
        },
        media: {
            background: {
                type: 'String',
                required() {
                    return !this.parent;
                }
            },
            icon: { type: 'String' }
        },
        parent: {
            type: 'ObjectId',
            default: null,
            ref: 'category'
        }
    },
    { minimize: false }
);

CategorySchema.pre('save', preSave);
CategorySchema.pre('remove', preRemove);
CategorySchema.methods.update = update;

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
