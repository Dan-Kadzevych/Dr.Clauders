const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: 'String', required: true, trim: true },
    price: { type: 'String', min: 0, required: true, trim: true },
    amount: { type: 'Number', min: 0, default: 0 }
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
