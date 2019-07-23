const jwt = require('jsonwebtoken');

const User = require('../models/user');
const { hashToken } = require('../duck/utils');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'secret');
        const hashedToken = hashToken(token);

        const user = await User.findById(decoded.id);

        if (!user) {
            throw new Error();
        }

        await user.normalizeTokens();

        user.checkToken(hashedToken);

        req.user = user;
        return next();
    } catch (e) {
        return res.status(400).send({ error: 'Please Authenticate' });
    }
};

module.exports = auth;
