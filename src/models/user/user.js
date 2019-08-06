const mongoose = require('mongoose');
const moment = require('moment');

const { tokenLifetimeSeconds } = require('../../duck/constants');
const { preSave } = require('./middlewares');
const {
    generateAuthToken,
    normalizeTokens,
    checkToken,
    getPublicProfile,
    addToCart,
    removeFromCart,
    updateCart,
    concatCart,
    normalizeCart,
    populateCartProducts
} = require('./methods');
const findByCredentials = require('./findByCredentials');
const validateCredentials = require('./validateCredentials');
const validate = require('./validate');
const validateCart = require('./validateCart');

const TokenSchema = new mongoose.Schema({
    token: { type: 'String', required: true },
    expiresAt: {
        type: 'Date',
        default: () => moment().add(tokenLifetimeSeconds, 's')
    }
});

const CartSchema = new mongoose.Schema(
    {
        quantityByID: { type: 'Object', default: {} },
        productIDs: [{ type: 'String' }]
    },
    {
        minimize: false,
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

CartSchema.virtual('products', {
    localField: 'productIDs',
    foreignField: '_id',
    ref: 'product',
    default: []
});

CartSchema.methods.removeProducts = removeFromCart;
CartSchema.methods.addProduct = addToCart;
CartSchema.methods.update = updateCart;
CartSchema.methods.concat = concatCart;
CartSchema.methods.normalize = normalizeCart;

const UserSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', unique: true, lowercase: true, required: true },
    phone: { type: 'String', unique: true, required: true },
    password: { type: 'String', required: true },
    cart: CartSchema,
    isAdmin: { type: 'Boolean', default: false },
    tokens: [TokenSchema]
});

UserSchema.pre('save', preSave);
UserSchema.methods.generateAuthToken = generateAuthToken;
UserSchema.methods.normalizeTokens = normalizeTokens;
UserSchema.methods.checkToken = checkToken;
UserSchema.methods.toJSON = getPublicProfile;
UserSchema.methods.populateCartProducts = populateCartProducts;
UserSchema.statics.validate = validate;
UserSchema.statics.validateCart = validateCart;
UserSchema.statics.validateCredentials = validateCredentials;
UserSchema.statics.findByCredentials = findByCredentials;

const User = mongoose.model('user', UserSchema);

module.exports = User;
