const mongoose = require('mongoose');

const { preSave } = require('./middlewares');
const { update } = require('./methods');

const ProductSchema = new mongoose.Schema(
    {
        title: { type: 'String', required: true, trim: true },
        price: { type: 'Number', min: 0, required: true, trim: true },
        amount: { type: 'Number', min: 0, default: 0 },
        description: {
            main: { type: 'String', default: '', trim: true },
            media: [{ type: 'String' }],
            tabs: [
                {
                    title: 'String',
                    content: 'String'
                }
            ]
        },
        media: {
            url: { type: 'String', required: true }
        },
        categoryIDs: [{ type: 'ObjectId', ref: 'category', required: true }],
        slug: { type: 'String', unique: true, required: true, trim: true }
    },
    { minimize: false }
);

ProductSchema.pre('save', preSave);
ProductSchema.methods.update = update;

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
