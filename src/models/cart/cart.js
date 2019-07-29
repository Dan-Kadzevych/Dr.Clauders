const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    productIDs: [{ type: 'ObjectId', ref: 'product' }],
    quantityByID: [{ productID: 'String', quantity: 'Number' }]
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
