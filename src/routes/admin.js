const express = require('express');

const { auth, admin } = require('../middlewares');
const Product = require('../models/product');
const Category = require('../models/category');

const router = new express.Router();

router.post('/product', auth, admin, async (req, res) => {
    try {
        const product = new Product({
            ...req.body,
            media: { url: 'product-test.png' }
        });

        await product.save();

        res.send(product);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.delete('/product/:id', auth, admin, async (req, res) => {
    try {
        const result = await Product.deleteOne({ _id: req.params.id });

        res.send(result);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.patch('/product/:id', auth, admin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            res.status(400).send('Product not found');
        }

        await product.update(req.body);

        res.send(product);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.post('/category', auth, admin, async (req, res) => {
    try {
        const category = new Category({
            ...req.body,
            media: !req.body.parent
                ? { background: 'dog-supplements-header.jpg' }
                : null
        });

        await category.save();

        res.send(category);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.delete('/category/:id', auth, admin, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(400).send('Category not found');
        }

        await category.remove();

        res.send(category);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.patch('/category/:id', auth, admin, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(400).send('Category not found');
        }

        await category.update(req.body);

        res.send(category);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

module.exports = router;
