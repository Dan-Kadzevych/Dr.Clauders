const tokenLifetimeSeconds = 60 * 60 * 24 * 7;
const emptyCart = {
    productIDs: [],
    quantityByID: {}
};

module.exports = { tokenLifetimeSeconds, emptyCart };
