const mongoose = require('mongoose');
const { preSave } = require('./middlewares');

const ProductSchema = new mongoose.Schema({
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
        url: 'String'
    },
    categoryIDs: [{ type: 'ObjectId', ref: 'categories', required: true }],
    slug: { type: 'String', unique: true, required: true, trim: true }
});

ProductSchema.pre('save', preSave);

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
