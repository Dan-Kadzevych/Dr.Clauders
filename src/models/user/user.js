const mongoose = require('mongoose');
const moment = require('moment');

const { tokenLifetimeSeconds } = require('../../duck/constants');
const { preSave } = require('./middlewares');
const {
    generateAuthToken,
    normalizeTokens,
    checkToken,
    getPublicProfile,
    getCart
} = require('./methods');
const findByCredentials = require('./findByCredentials');
const validateCredentials = require('./validateCredentials');
const formatCartToSave = require('./formatCartToSave');
const validate = require('./validate');

const TokenSchema = new mongoose.Schema({
    token: { type: 'String', required: true },
    expiresAt: {
        type: 'Date',
        default: () => moment().add(tokenLifetimeSeconds, 's')
    }
});

const CartSchema = new mongoose.Schema({
    productIDs: [{ type: 'ObjectId', ref: 'product' }],
    quantityByID: [{ productID: 'String', quantity: 'Number' }]
});

const UserSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', unique: true, lowercase: true, required: true },
    phone: { type: 'String', unique: true, required: true },
    password: { type: 'String', required: true },
    cart: CartSchema,
    tokens: [TokenSchema]
});

UserSchema.pre('save', preSave);
UserSchema.methods.generateAuthToken = generateAuthToken;
UserSchema.methods.normalizeTokens = normalizeTokens;
UserSchema.methods.checkToken = checkToken;
UserSchema.methods.toJSON = getPublicProfile;
UserSchema.methods.getCart = getCart;
UserSchema.statics.validate = validate;
UserSchema.statics.validateCredentials = validateCredentials;
UserSchema.statics.findByCredentials = findByCredentials;
UserSchema.statics.formatCartToSave = formatCartToSave;

const User = mongoose.model('user', UserSchema);

module.exports = User;