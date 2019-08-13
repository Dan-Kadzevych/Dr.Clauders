const Joi = require('joi');
const { withJoiMessage } = require('../../duck/utils');

const validate = category =>
    Joi.validate(
        category,
        Joi.object({
            name: Joi.string()
                .min(1)
                .max(200)
                .required()
                .error(withJoiMessage('Не валидное имя')),
            slug: Joi.string()
                .regex(/^[a-z0-9-]+$/)
                .required()
                .error(withJoiMessage('Не валидный slug'))
        })
            .required()
            .error(withJoiMessage('Инвормация об категории не валидна')),
        { allowUnknown: true }
    );

module.exports = validate;
