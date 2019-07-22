const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jwt.verify(token, 'secret');
        const user = await User.findById(decoded.id);
        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('base64');

        if (!user) {
            throw new Error();
        }

        const isMatches = user.tokens.some(el => el.token === hashedToken);

        if (!isMatches) {
            throw new Error();
        }

        req.user = user;
        return next();
    } catch (e) {
        return res.status(400).send({ error: 'Please Authenticate' });
    }
};

module.exports = auth;
