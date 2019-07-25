const bcrypt = require('bcrypt');

async function findByCredentials(email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        return null;
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return null;
    }

    return user;
}

module.exports = findByCredentials;
