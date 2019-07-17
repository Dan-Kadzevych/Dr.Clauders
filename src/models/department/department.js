const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: { type: 'String', required: true, trim: true, index: true },
    latitude: { type: 'String', required: true, trim: true },
    longitude: { type: 'String', required: true, trim: true },
    phone: { type: 'String', trim: true },
    ID: { type: 'String', required: true, trim: true, unique: true },
    cityID: { type: 'Number' },
    deliveryID: { type: 'Number' },
    schedule: 'Object'
});

DepartmentSchema.index({ name: 'text' });

const Department = mongoose.model('department', DepartmentSchema);

module.exports = Department;
