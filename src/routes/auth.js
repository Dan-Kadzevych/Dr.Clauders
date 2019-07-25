const express = require('express');

const User = require('../models/user');
const { auth } = require('../middlewares');

const router = new express.Router();

router.post('/login', async (req, res) => {
    try {
        const { error } = User.validateCredentials(req.body);

        if (error) {
            return res.status(500).send({ error: error.details[0].message });
        }

        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        if (!user) {
            return res.status(400).send({ error: 'Unable to login' });
        }

        const token = await user.generateAuthToken();

        return res.send({ user, token });
    } catch (e) {
        return res.status(500).send({ error: 'Something went wrong' });
    }
});

router.get('/logout', auth, async (req, res) => {
    try {
        const index = req.user.tokens.findIndex(el => el.token === req.token);
        req.user.tokens.splice(index, 1);
        await req.user.save();
        return res.send();
    } catch (e) {
        return res.status(500).send({ error: 'Unable to logout' });
    }
});

module.exports = router;
