/* eslint-disable no-param-reassign */
const jwt = require('jsonwebtoken');
const moment = require('moment');
const omit = require('lodash/omit');
const difference = require('lodash/difference');
const uniq = require('lodash/uniq');
const compact = require('lodash/compact');
const pick = require('lodash/pick');

const { hashToken } = require('../../duck/utils');
const { tokenLifetimeSeconds } = require('../../duck/constants');

async function generateAuthToken() {
    const user = this;

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
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

function addToCart(productID, qty = 1) {
    const cart = this;

    if (!cart.productIDs.includes(productID)) {
        cart.productIDs.push(productID);
    }

    cart.quantityByID[productID] =
        (cart.quantityByID[productID] || 0) + Number(qty);

    cart.normalize();
    cart.markModified('quantityByID');
}

function removeFromCart(productIDs) {
    const cart = this;

    cart.productIDs = difference(cart.productIDs, productIDs);
    cart.quantityByID = omit(cart.quantityByID, productIDs);

    cart.normalize();
    cart.markModified('quantityByID');
}

function updateCart({ productIDs, quantityByID }) {
    const cart = this;

    cart.productIDs = productIDs;
    cart.quantityByID = quantityByID;

    cart.normalize();
    cart.markModified('quantityByID');
}

function concatCart({ productIDs, quantityByID }) {
    const cart = this;

    cart.productIDs = [...cart.productIDs, ...productIDs];
    cart.quantityByID = { ...cart.quantityByID, ...quantityByID };

    cart.normalize();
    cart.markModified('quantityByID');
}

function normalizeCart() {
    const cart = this;

    cart.productIDs = uniq(compact(cart.productIDs));
    cart.quantityByID = pick(cart.quantityByID, cart.productIDs);

    cart.markModified('quantityByID');
}

async function populateCartProducts() {
    const user = this;

    await user.populate('cart.products').execPopulate();
}

module.exports = {
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
};
