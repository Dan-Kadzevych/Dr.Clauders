const each = require('lodash/each');

async function update(updates) {
    const product = this;

    each(updates, (val, key) => {
        product[key] = val;
    });

    await product.save();
}

module.exports = { update };
