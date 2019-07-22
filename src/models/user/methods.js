const jwt = require('jsonwebtoken');
const crypto = require('crypto');

async function generateAuthToken() {
    const token = jwt.sign({ id: this.id }, 'secret', { expiresIn: 60 });
    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('base64');

    this.tokens = this.tokens.concat({
        token: hashedToken,
        expiresAt: new Date()
    });

    await this.save();

    return token;
}

module.exports = { generateAuthToken };
