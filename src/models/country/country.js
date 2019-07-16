const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    text: { type: 'String', required: true, trim: true },
    ID: { type: 'Number', required: true, unique: true, index: true }
});

const Country = mongoose.model('country', CountrySchema);

module.exports = Country;
