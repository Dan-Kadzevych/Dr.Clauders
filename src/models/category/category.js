const mongoose = require('mongoose');
const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const get = require('lodash/get');

const { preRemove, preSave } = require('./middlewares');
const { update } = require('./methods');
const getFormattedCategories = require('./getFormattedCategories');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: 'String',
            required: true,
            trim: true
        },
        slug: {
            type: 'String',
            required: true,
            trim: true
        },
        pet: {
            type: 'String',
            required: true
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
    {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        },
        minimize: false
    }
);

CategorySchema.index({ parent: 1, slug: 1 }, { unique: true });
CategorySchema.virtual('path').get(function getFullSlug() {
    const { parent, slug } = this;

    return parent
        ? `${get(parent, 'path')}/${slug}`
        : `/pet-supplements/${slug}`;
});

CategorySchema.pre('save', preSave);
CategorySchema.pre('remove', preRemove);

CategorySchema.methods.update = update;
CategorySchema.statics.getFormatted = getFormattedCategories;

CategorySchema.plugin(mongooseLeanVirtuals);

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
