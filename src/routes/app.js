const express = require('express');

const Category = require('../models/category');
const navConfigStatic = require('../duck/navConfigStatic');

const router = new express.Router();

router.get('/get_config', async (req, res) => {
    try {
        const categories = await Category.find({ parent: null })
            .populate('subCategories')
            .sort('pos');

        const appConfig = {
            navConfig: [...categories, ...navConfigStatic]
        };

        res.send(appConfig);
    } catch (e) {
        res.send({ error: e });
    }
});

module.exports = router;
