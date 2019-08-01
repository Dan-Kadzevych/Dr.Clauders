const express = require('express');

const { auth } = require('../middlewares');
const { emptyCart } = require('../duck/constants');
const User = require('../models/user');

const router = new express.Router();

router.put('/', auth, async (req, res) => {
    try {
        const { user, body } = req;
        const { error } = User.validateCart(body.cart);

        if (error) {
            user.cart.update(emptyCart);
            await user.save();

            return res.status(400).send({ error: error.details[0].message });
        }

        user.cart.update(body.cart);
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

        user.cart.addProduct(body.productID, body.quantity);

        const { error } = User.validateCart(user.cart);

        if (error) {
            user.cart.update(emptyCart);
            await user.save();

            return res.status(400).send({ error: error.details[0].message });
        }

        await user.save();
        await user.populateCartProducts();

        return res.send({
            cart: user.cart,
            product: user.cart.products.find(
                product => product.id === body.productID
            )
        });
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

        user.cart.removeProducts(productIDs);

        const { error } = User.validateCart(user.cart);

        if (error) {
            user.cart.update(emptyCart);
            await user.save();

            return res.status(400).send({ error: error.details[0].message });
        }

        await user.save();
        await user.populateCartProducts();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
