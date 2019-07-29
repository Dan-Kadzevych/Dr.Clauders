const reduce = require('lodash/reduce');

const formatCartToSave = (cart = {}) => ({
    ...cart,
    quantityByID: reduce(
        cart.quantityByID,
        (result, value, key) => {
            result.push({ productID: key, quantity: value });
            return result;
        },
        []
    )
});

module.exports = formatCartToSave;
