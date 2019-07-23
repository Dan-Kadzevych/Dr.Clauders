const mongoose = require('mongoose');
const moment = require('moment');

const { tokenLifetimeSeconds } = require('../../duck/constants');
const { preSave } = require('./middlewares');
const {
    generateAuthToken,
    normalizeTokens,
    checkToken,
    getPublicProfile
} = require('./methods');
const findByCredentials = require('./findByCredentials');
const validate = require('./validate');

const TokenSchema = new mongoose.Schema({
    token: { type: 'String', required: true },
    expiresAt: {
        type: 'Date',
        default: () => moment().add(tokenLifetimeSeconds, 's')
    }
});

const UserSchema = new mongoose.Schema({
    name: { type: 'String', required: true },
    email: { type: 'String', unique: true, required: true },
    phone: { type: 'String', unique: true, required: true },
    password: { type: 'String', required: true },
    tokens: [TokenSchema]
});

UserSchema.pre('save', preSave);
UserSchema.methods.generateAuthToken = generateAuthToken;
UserSchema.methods.normalizeTokens = normalizeTokens;
UserSchema.methods.checkToken = checkToken;
UserSchema.methods.toJSON = getPublicProfile;
UserSchema.statics.validate = validate;
UserSchema.statics.findByCredentials = findByCredentials;

const User = mongoose.model('user', UserSchema);

module.exports = User;
