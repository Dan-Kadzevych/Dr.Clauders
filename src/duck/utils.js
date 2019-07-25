const crypto = require('crypto');

const hashToken = token =>
    crypto
        .createHash('sha256')
        .update(token)
        .digest('base64');

const withJoiMessage = message => errors =>
    errors.map(error => ({
        ...error,
        message
    }));

module.exports = { hashToken, withJoiMessage };
