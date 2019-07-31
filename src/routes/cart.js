const express = require('express');
const difference = require('lodash/difference');
const omit = require('lodash/omit');

const { auth } = require('../middlewares');

const router = new express.Router();

router.put('/', auth, async (req, res) => {
    try {
        const { user, body } = req;

        user.cart = body.cart;

        await user.save();

        await user.populateCartProducts();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.patch('/', auth, async (req, res) => {
    try {
        const { user, body } = req;

        await user.addToCart(body.productID, body.quantity);

        await user.populateCartProducts();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.delete('/', auth, async (req, res) => {
    try {
        const {
            user,
            body: { productIDs }
        } = req;

        user.cart.productIDs = difference(user.cart.productIDs, productIDs);

        user.cart.quantityByID = omit(user.cart.quantityByID, productIDs);

        await user.save();

        await user.populateCartProducts();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
