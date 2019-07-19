const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
    price: Number,
    description: 'String'
});

const DeliverySchema = new mongoose.Schema(
    {
        name: { type: 'String', required: true, trim: true },
        ID: { type: 'Number', required: true, trim: true, unique: true },
        deliveryPrice: PriceSchema,
        paymentIDs: [{ type: 'Number', unique: true }]
    },
    { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

DeliverySchema.virtual('payment', {
    ref: 'payment',
    localField: 'paymentIDs',
    foreignField: 'ID'
});

const Delivery = mongoose.model('delivery', DeliverySchema);

module.exports = Delivery;
