const crypto = require('crypto');

const hashToken = token =>
    crypto
        .createHash('sha256')
        .update(token)
        .digest('base64');

module.exports = { hashToken };
