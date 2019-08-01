const Joi = require('joi');
const { withJoiMessage } = require('../../duck/utils');

const validateProductIDs = Joi.array()
    .items(Joi.string())
    .required()
    .error(withJoiMessage('Invalid product ids info'));

const validateQuantityByID = Joi.object()
    .pattern(/.*/, [Joi.string(), Joi.number()])
    .required()
    .error(withJoiMessage('Invalid cart info'));

const validateCart = cart =>
    Joi.validate(
        cart,
        {
            productIDs: validateProductIDs,
            quantityByID: validateQuantityByID
        },
        { allowUnknown: true }
    );

module.exports = validateCart;
