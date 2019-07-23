const bcrypt = require('bcrypt');

async function findByCredentials(email, password) {
    const user = await this.findOne({ email });

    if (!user) {
        throw new Error();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error();
    }

    return user;
}

module.exports = findByCredentials;
