const each = require('lodash/each');

async function update(updates) {
    const category = this;

    each(updates, (val, key) => {
        if (key === 'slug') {
            category[key] = { personal: val };
        } else {
            category[key] = val;
        }
    });

    await category.save();
}

module.exports = { update };
