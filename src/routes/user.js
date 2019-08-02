const express = require('express');

const { auth } = require('../middlewares');
const { emptyCart } = require('../duck/constants');

const User = require('../models/user');

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = User.validate(req.body.user);

        if (error) {
            return res.status(500).send({ error: error.details[0].message });
        }

        const { name, email, phone, password } = req.body.user;
        let { cart } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).send({
                error: `User with email **${email}** is already registered`
            });
        }

        if (await User.findOne({ phone })) {
            return res.status(400).send({
                error: `This phone number **${phone}** already in use`
            });
        }

        const { error: cartError } = User.validateCart(cart);

        if (cartError) {
            cart = emptyCart;
        }

        const user = new User({
            name,
            email,
            phone,
            password,
            cart
        });

        user.cart.normalize();
        await user.save();
        await user.populateCartProducts();

        const token = await user.generateAuthToken();

        return res.send({ user, token, cart: user.cart });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.post('/sync_cart', auth, async (req, res) => {
    try {
        const {
            user,
            body: { cart }
        } = req;

        user.cart = User.formatCartToSave(cart);

        await user.save();

        return res.send({ message: 'Cart successfully synced' });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.get('/me', auth, async (req, res) => {
    try {
        const { user } = req;

        await user.populateCartProducts();

        return res.send({ user, cart: user.cart });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
