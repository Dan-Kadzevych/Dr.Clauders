const express = require('express');
const path = require('path');

const productRoutes = require('./routes/product');
const appRoutes = require('./routes/app');
require('./db/mongoose');

const app = express();

const publicDir = path.join(__dirname, '../public');
app.use(express.static(publicDir));

app.use('/api/product', productRoutes);
app.use('/api/app', appRoutes);

const port = process.env.PORT || '5000';

app.listen(port);
