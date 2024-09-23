const Joi = require('joi');

// Validador para crear un role
const validatesSChemaCreateRoles = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
});

// Validador para actualizar un role por medio de PUT
const validatesSChemaUpdatePutRole = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

// Validador para actualizar un role por medio de PATCH
const validatesSChemaUpdatePatchRole = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

// Validador para obtener un role por medio de GET
const validatesSChemaGetRole = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateRoles,
    validatesSChemaUpdatePutRole,
    validatesSChemaUpdatePatchRole,
    validatesSChemaGetRole
}