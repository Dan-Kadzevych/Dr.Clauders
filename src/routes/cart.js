const express = require('express');

const { auth } = require('../middlewares');

const router = new express.Router();

router.post('/update', auth, async (req, res) => {
    try {
        const { user, body } = req;

        user.cart = body.cart;

        await user.save();

        await user.populate('cart.products').execPopulate();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
