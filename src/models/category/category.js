const mongoose = require('mongoose');
const get = require('lodash/get');

const { preRemove } = require('./middlewares');
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
            personal: {
                type: 'String',
                required: true,
                trim: true
            }
        },
        pet: {
            type: 'String',
            required: true,
            trim: true
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

CategorySchema.index({ parent: 1, 'slug.personal': 1 }, { unique: true });
CategorySchema.virtual('slug.full').get(function getFullSlug() {
    const { parent, slug } = this;
    const personalSlug = get(slug, 'personal');

    return parent
        ? get(parent, 'slug.full') + personalSlug
        : `/pet-supplements${personalSlug}`;
});

CategorySchema.pre('remove', preRemove);

CategorySchema.methods.update = update;
CategorySchema.statics.getFormatted = getFormattedCategories;

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;
