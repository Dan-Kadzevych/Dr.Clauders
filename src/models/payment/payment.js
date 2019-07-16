const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: true },
    descr: { type: 'String', trim: true },
    ID: { type: 'Number', required: true, trim: true, unique: true }
});

const Payment = mongoose.model('payment', PaymentSchema);

module.exports = Payment;
