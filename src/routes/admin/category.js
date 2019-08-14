const express = require('express');
const get = require('lodash/get');

const Category = require('../../models/category/index');

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const slug = get(req.body, 'slug');
        const parent = get(req.body, 'parent');

        const { error } = Category.validate(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }

        if (await Category.findOne({ slug, parent })) {
            return res.status(400).send({
                error: `Категория с таким slug "**${slug}**" уже существует`
            });
        }

        const category = new Category({
            ...req.body
        });

        await category.save();

        const categories = await Category.getFormatted();

        return res.send(categories);
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.delete('/:id', async (req, res) => {
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

router.patch('/:id', async (req, res) => {
    try {
        const slug = get(req.body, 'slug');
        const parent = get(req.body, 'parent');

        const { error } = Category.validate(req.body);

        if (error) {
            return res.status(400).send({ error: error.details[0].message });
        }

        const category = await Category.findById(req.params.id);

        if (!category) {
            res.status(400).send({ error: 'Категории не существует' });
        }

        if (
            await Category.findOne({
                slug,
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
