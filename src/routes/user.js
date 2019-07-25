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

        const { name, email, phone, password } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).send({
                error: `User with email **${email}** is already registered`
            });
        }

        if (await User.findOne({ phone })) {
            return res.status(400).send({
                error: `This phone number **${phone}** already in use`
            });
        }

        const user = new User({
            name,
            email,
            phone,
            password
        });

        await user.save();

        const token = await user.generateAuthToken();

        return res.send({ user, token });
    } catch (e) {
        return res.status(500).send({ error: e.message });
    }
});

router.get('/me', auth, async (req, res) => {
    res.send({ user: req.user });
});

module.exports = router;
