const Joi = require('joi');
const { withJoiMessage } = require('../../duck/utils');

const validate = user =>
    Joi.validate(
        user,
        Joi.object({
            name: Joi.string()
                .min(1)
                .max(200)
                .required()
                .error(withJoiMessage('Invalid name')),
            email: Joi.string()
                .email()
                .required()
                .error(withJoiMessage('Invalid email address')),
            phone: Joi.string()
                .regex(/^(\+?38|8)?0\d{9}$/)
                .required()
                .error(withJoiMessage('Invalid phone number')),
            password: Joi.string()
                .min(6)
                .max(200)
                .required()
                .error(
                    withJoiMessage(
                        'Пароль должен быть не менее 6 символов, содержать цифры и заглавные буквы'
                    )
                )
        })
            .required()
            .error(withJoiMessage('User Info should be provided with body')),
        { allowUnknown: true }
    );

module.exports = validate;
