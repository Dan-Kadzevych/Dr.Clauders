const each = require('lodash/each');

async function update(updates) {
    const category = this;

    each(updates, (val, key) => {
        category[key] = val;
    });

    await category.save();
}

module.exports = { update };
