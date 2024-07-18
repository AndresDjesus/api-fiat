const Joi = require('joi');

// Validador para crear un motor
const validatesSChemaCreateMotor = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
});

// Validador para actualizar un motor por medio de PUT
const validatesSChemaUpdatePutMotor = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
});

// Validador para actualizar un motor por medio de PATCH
const validatesSChemaUpdatePatchMotor = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
});

// Validador para obtener un motor por medio de GET ID
const validatesSChemaGetMotor = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
});

// Validador para eliminar un motor por medio de DELETE ID
const validatesSChemaDeleteMotor = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateMotor,
    validatesSChemaUpdatePutMotor,
    validatesSChemaUpdatePatchMotor,
    validatesSChemaGetMotor,
    validatesSChemaDeleteMotor
}