const express = require('express');

const User = require('../models/user');

const router = new express.Router();

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();

        return res.send({ user, token });
    } catch (e) {
        return res.status(500).send({ error: 'Unable to login' });
    }
});

module.exports = router;
