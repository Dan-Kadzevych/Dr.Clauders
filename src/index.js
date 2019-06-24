const express = require('express');
const Product = require('./models/product');
require('./db/mongoose');

const app = express();

app.get('/api/get_products', async (req, res) => {
    const products = await Product.find({});

    res.send(products);
});

const port = process.env.PORT || '5000';

app.listen(port);
