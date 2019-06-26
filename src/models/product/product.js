const mongoose = require('mongoose');
const { preSave } = require('./middlewares');

const ProductSchema = new mongoose.Schema({
    title: { type: 'String', required: true, trim: true },
    price: { type: 'Number', min: 0, required: true, trim: true },
    amount: { type: 'Number', min: 0, default: 0 },
    media: {
        url: 'String'
    },
    categoryIDs: [{ type: 'ObjectId', ref: 'categories', required: true }]
});

ProductSchema.pre('save', preSave);

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
