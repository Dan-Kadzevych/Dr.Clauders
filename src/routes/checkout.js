const express = require('express');
const escapeStringRegexp = require('escape-string-regexp');

require('../models/payment');
const Delivery = require('../models/delivery');
const City = require('../models/city');
const Department = require('../models/department');
const Street = require('../models/street');

const router = new express.Router();

router.get('/cities', async (req, res) => {
    try {
        const { search } = req.query;

        const cities = await City.find({
            name: {
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
        const { cityID } = req.query;

        const cityDelivery = await City.findOne(
            { ID: cityID },
            'deliveryIDs'
        ).populate('delivery');

        if (!cityDelivery) {
            throw new Error(`There is no City with such ID: ${cityID}`);
        }

        res.send(cityDelivery.delivery);
    } catch (e) {
        res.send({ error: e.message });
    }
});

router.get('/departments', async (req, res) => {
    try {
        const { cityID, deliveryID, search } = req.query;

        const departments = await Department.find({
            cityID,
            deliveryID,
            name: {
                $regex: escapeStringRegexp(search),
                $options: 'i'
            }
        });

        if (!departments.length) {
            throw new Error(
                `There is no departments for this query: city: ${cityID}, delivery: ${deliveryID}`
            );
        }

        res.send(departments);
    } catch (e) {
        res.send({ error: e.message });
    }
});

router.get('/streets', async (req, res) => {
    try {
        const { cityID, search } = req.query;

        const streets = await Street.find({
            cityID,
            name: {
                $regex: escapeStringRegexp(search),
                $options: 'i'
            }
        });

        if (!streets.length) {
            throw new Error(
                `There is no streets for this query: city: ${cityID}`
            );
        }

        res.send(streets);
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
