const bcrypt = require('bcrypt');

async function findByCredentials(email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error('Unable to login');
    }

    return user;
}

module.exports = findByCredentials;
