const express = require('express');
const escapeStringRegexp = require('escape-string-regexp');

require('../models/payment');
const Delivery = require('../models/delivery');
const City = require('../models/city');

const router = new express.Router();

router.get('/cities', async (req, res) => {
    try {
        const { search } = req.query;

        const cities = await City.find({
            text: {
                $regex: escapeStringRegexp(search),
                $options: 'i'
            }
        }).sort({ ID: 1 });

        res.send(cities);
    } catch (e) {
        res.send({ error: e });
    }
});

router.get('/delivery', async (req, res) => {
    try {
        const { ID } = req.query;

        const cityDelivery = await City.findOne({ ID }, 'deliveryIDs').populate(
            'delivery'
        );

        if (!cityDelivery) {
            throw new Error(`There is no City with such ID: ${ID}`);
        }

        res.send(cityDelivery.delivery);
    } catch (e) {
        res.send({ error: e.message });
    }
});

router.get('/payment', async (req, res) => {
    try {
        const { ID } = req.query;

        const deliveryPayment = await Delivery.findOne(
            { ID },
            'paymentIDs'
        ).populate('payment');

        if (!deliveryPayment) {
            throw new Error(`There is no delivery method with such ID: ${ID}`);
        }

        res.send(deliveryPayment.payment);
    } catch (e) {
        res.send({ error: e.message });
    }
});

module.exports = router;
