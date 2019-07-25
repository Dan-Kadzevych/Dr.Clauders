const Joi = require('joi');
const { withJoiMessage } = require('../../duck/utils');

const validateCredentials = user =>
    Joi.validate(
        user,
        {
            email: Joi.string()
                .email()
                .required()
                .error(withJoiMessage('Invalid email address')),
            password: Joi.string()
                .min(6)
                .max(200)
                .required()
                .error(
                    withJoiMessage(
                        'Пароль должен быть не менее 6 символов, содержать цифры и заглавные буквы'
                    )
                )
        },
        { allowUnknown: true }
    );

module.exports = validateCredentials;
