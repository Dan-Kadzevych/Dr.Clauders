const bcrypt = require('bcrypt');

async function preSave(next) {
    try {
        const user = this;

        if (user.isModified('password')) {
            user.password = await bcrypt.hash(user.password, 8);
        }

        next();
    } catch (e) {
        next(e);
    }
}

module.exports = { preSave };
