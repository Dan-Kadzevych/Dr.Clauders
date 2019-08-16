const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
require('./db/mongoose');

const productRoutes = require('./routes/product');
const appRoutes = require('./routes/app');
const checkoutRoutes = require('./routes/checkout');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const adminRoutes = require('./routes/admin/admin');

const app = express();
const port = process.env.PORT || 5000;
const publicDir = path.join(__dirname, '../public');

app.use(express.static(path.join(__dirname, '/../client/build')));
app.use(express.static(publicDir));
app.use(bodyParser.json());

app.use('/api/product', productRoutes);
app.use('/api/app', appRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    return res.status(500).send('Something broke!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

app.listen(port);
