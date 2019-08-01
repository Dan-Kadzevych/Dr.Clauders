const express = require('express');

const { auth } = require('../middlewares');

const router = new express.Router();

router.put('/', auth, async (req, res) => {
    try {
        const { user, body } = req;

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
        await user.save();
        await user.populateCartProducts();

        return res.send(user.cart);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
