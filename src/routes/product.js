const express = require('express');
const {
    Types: { ObjectId }
} = require('mongoose');

const Product = require('../models/product');

const router = new express.Router();

router.get('/get_products', async (req, res) => {
    try {
        const { categoryID } = req.query;

        const products = await Product.find({
            categoryIDs: ObjectId(categoryID)
        });

        res.send(products);
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;
