const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema(
    {
        name: { type: 'String', required: true, trim: true, index: true },
        ID: { type: 'Number', required: true, trim: true },
        countryID: { type: 'Number', ref: 'country' },
        deliveryIDs: [{ type: 'Number' }]
    },
    { toObject: { virtuals: true }, toJSON: { virtuals: true } }
);

CitySchema.virtual('delivery', {
    ref: 'delivery',
    localField: 'deliveryIDs',
    foreignField: 'ID'
});

CitySchema.index({ name: 'text' });

const City = mongoose.model('city', CitySchema);

module.exports = City;
