/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');
const moment = require('moment');
const omit = require('lodash/omit');

const { hashToken } = require('../../duck/utils');
const { tokenLifetimeSeconds } = require('../../duck/constants');

async function generateAuthToken() {
    const user = this;

    const token = jwt.sign({ id: user.id }, 'secret', {
        expiresIn: tokenLifetimeSeconds
    });
    const hashedToken = hashToken(token);

    if (user.tokens.length > 10) {
        user.tokens = [];
    }

    user.tokens = user.tokens.concat({
        token: hashedToken
    });

    await user.save();

    return token;
}

async function normalizeTokens() {
    const user = this;

    if (user.tokens.some(el => moment(el.expiresAt).isBefore())) {
        user.tokens = user.tokens.filter(el => moment(el.expiresAt).isAfter());

        await user.save();
    }
}

function getPublicProfile() {
    const user = this;
    const userObject = user.toObject();

    return omit(userObject, ['password', 'tokens', 'cart']);
}

function checkToken(hashedToken) {
    const user = this;
    const tokenObj = user.tokens.find(el => el.token === hashedToken);

    if (!tokenObj || moment(tokenObj.expiresAt).isBefore()) {
        throw new Error('Invalid Token');
    }
}

module.exports = {
    generateAuthToken,
    normalizeTokens,
    checkToken,
    getPublicProfile
};
