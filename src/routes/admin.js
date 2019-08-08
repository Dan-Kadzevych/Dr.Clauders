const express = require('express');
const get = require('lodash/get');

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
        const slug = get(req.body, 'slug');
        const parent = get(req.body, 'parent');

        if (await Category.findOne({ 'slug.personal': slug, parent })) {
            return res.status(400).send({
                error: `Категория с таким slug "**${slug}**" уже существует`
            });
        }

        const category = new Category({
            ...req.body,
            slug: {
                personal: slug
            },
            media: !parent ? { background: 'dog-supplements-header.jpg' } : null
        });

        await category.save();

        const categories = await Category.getFormatted();

        return res.send(categories);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.delete('/category/:id', auth, admin, async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(400).send('Category not found');
        }

        await category.remove();

        const categories = await Category.getFormatted();

        res.send(categories);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.patch('/category/:id', auth, admin, async (req, res) => {
    try {
        const slug = get(req.body, 'slug');
        const parent = get(req.body, 'parent');

        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(400).send('Category not found');
        }

        if (
            await Category.findOne({
                'slug.personal': slug,
                parent,
                _id: { $ne: req.params.id }
            })
        ) {
            return res.status(400).send({
                error: `Категория с таким slug "**${slug}**" уже существует`
            });
        }

        await category.update(req.body);

        const categories = await Category.getFormatted();

        return res.send(categories);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
