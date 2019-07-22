const express = require('express');

const { auth } = require('../middlewares');

const User = require('../models/user');

const router = new express.Router();

router.post('/', async (req, res) => {
    try {
        const { error } = User.validate(req.body);

        if (error) {
            return res.status(500).send({ error: error.details[0].message });
        }

        let user = await User.findOne({ email: req.body.email });

        if (user) {
            return res.status(400).send({ error: 'User already registered' });
        }

        user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        });

        await user.save();

        const token = await user.generateAuthToken();

        return res.send({ user, token });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.get('/me', auth, async (req, res) => {
    res.send('me');
});

module.exports = router;
