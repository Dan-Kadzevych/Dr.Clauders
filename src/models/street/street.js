const mongoose = require('mongoose');

const StreetSchema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: true, index: true },
    ID: { type: 'String', required: true, trim: true, unique: true },
    type: { type: 'String' },
    cityID: { type: 'Number' }
});

StreetSchema.index({ name: 'text' });

const Street = mongoose.model('street', StreetSchema);

module.exports = Street;
