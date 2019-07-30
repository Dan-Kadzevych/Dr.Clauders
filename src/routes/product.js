const express = require('express');

const Product = require('../models/product');

const router = new express.Router();

router.get('/get_products', async (req, res) => {
    try {
        const { categoryID } = req.query;

        const products = await Product.find(
            {
                categoryIDs: categoryID
            },
            'title media price slug'
        );

        res.send(products);
    } catch (e) {
        res.send({ error: e });
    }
});

router.get('/get_cart_products', async (req, res) => {
    try {
        const { productIDs } = req.query;

        const products = await Product.find(
            {
                _id: { $in: productIDs }
            },
            'title media price slug'
        );

        res.send(products);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.get('/get_product', async (req, res) => {
    try {
        const product = await Product.findOne(req.query);

        res.send(product);
    } catch (e) {
        res.send({ error: e });
    }
});

module.exports = router;
