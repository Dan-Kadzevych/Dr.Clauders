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

        return res.send(products);
    } catch (e) {
        return res.send({ error: e });
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

router.get('/get_product/:slug', async (req, res) => {
    try {
        const product = await Product.findOne({ slug: req.params.slug });

        if (!product) {
            return res.status(400).send({ error: 'Product not found' });
        }

        return res.send(product);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
