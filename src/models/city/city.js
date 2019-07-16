const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
    {
        text: { type: 'String', required: true, trim: true, index: true },
        ID: { type: 'Number', required: true, trim: true },
        countryID: { type: 'Number', ref: 'country' },
        deliveryIDs: [{ type: 'Number', unique: true }]
    },
    { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

CitySchema.virtual('delivery', {
    ref: 'delivery',
    localField: 'deliveryIDs',
    foreignField: 'ID'
});

CitySchema.index({ text: 'text' });

const City = mongoose.model('city', CitySchema);

module.exports = City;
