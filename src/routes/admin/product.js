const express = require('express');
const get = require('lodash/get');

const Product = require('../../models/product/index');

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const slug = get(req.body, 'slug');

        if (await Product.findOne({ slug })) {
            return res.status(400).send({
                error: `Продукт с таким slug "**${slug}**" уже существует`
            });
        }
        const product = new Product({
            ...req.body,
            media: { url: 'product-test.png' }
        });

        await product.save();

        const products = await Product.find({});

        return res.send(products);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });

        const products = await Product.find({});

        res.send(products);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const slug = get(req.body, 'slug');
        const title = get(req.body, 'title');
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(400).send({ error: 'Product not found' });
        }

        if (
            await Product.findOne({
                slug,
                _id: { $ne: req.params.id }
            })
        ) {
            return res.status(400).send({
                error: `Продукт с таким slug "**${slug}**" уже существует`
            });
        }

        if (
            await Product.findOne({
                title,
                _id: { $ne: req.params.id }
            })
        ) {
            return res.status(400).send({
                error: `Продукт с таким именем "**${title}**" уже существует`
            });
        }

        await product.update(req.body);

        const products = await Product.find({});

        return res.send(products);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

module.exports = router;
