const Joi = require('joi');

// validador para crear un advertising
const validatesSChemaCreateAdvertising = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

// validador para actualizar un advertising por medio de PUT
const validatesSChemaUpdatePutAdvertising = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

// validador para actualizar un advertising por medio de PATCH
const validatesSChemaUpdatePatchAdvertising = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
});

// validador para obtener un advertising por medio de GET ID
const validatesSChemaGetAdvertising = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

// validador para eliminar un advertising por medio de DELETE ID
const validatesSChemaDeleteAdvertising = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateAdvertising,
    validatesSChemaUpdatePutAdvertising,
    validatesSChemaUpdatePatchAdvertising,
    validatesSChemaGetAdvertising,
    validatesSChemaDeleteAdvertising
}