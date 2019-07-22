const Joi = require('joi');

const validate = user =>
    Joi.validate(user, {
        name: Joi.string()
            .min(1)
            .max(200)
            .required(),
        email: Joi.string()
            .email()
            .required(),
        phone: Joi.string()
            .regex(/^\+?3?8?(0[5-9][0-9]\d{7})$/)
            .required(),
        password: Joi.string()
            .min(8)
            .max(200)
            .required()
    });

module.exports = validate;
