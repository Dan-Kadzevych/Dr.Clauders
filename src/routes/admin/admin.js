const express = require('express');

const { auth, admin } = require('../../middlewares/index');
const categoryRoutes = require('./category');
const productRoutes = require('./product');

const router = new express.Router();

router.use('/category', auth, admin, categoryRoutes);
router.use('/product', auth, admin, productRoutes);

module.exports = router;
