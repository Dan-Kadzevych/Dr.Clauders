const express = require('express');

const Category = require('../models/category');

const router = new express.Router();

router.get('/get_config', async (req, res) => {
    try {
        const categories = await Category.getFormatted();

        const appConfig = {
            categories
        };

        res.send(appConfig);
    } catch (e) {
        res.send({ error: e });
    }
});

module.exports = router;
