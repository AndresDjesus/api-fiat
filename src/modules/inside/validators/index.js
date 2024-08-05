const Joi = require('joi');

// Validador para crear un inside
const validatesSChemaCreateInside = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del inside es requerido',
        'string.empty': 'El nombre del inside es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del inside es requerida',
        'string.empty': 'La descripción del insdie es requerida',
    }),
});

// Validador para actualizar un inside por medio de PUT
const validatesSChemaUpdatePutInside = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del inside es requerido',
        'string.empty': 'El nombre del inside es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del inside es requerida',
        'string.empty': 'La descripción del insdie es requerida',
    }),
});

// Validador para actualizar un inside por medio de PATCH
const validatesSChemaUpdatePatchInside = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del inside es requerido',
        'string.empty': 'El nombre del inside es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del inside es requerida',
        'string.empty': 'La descripción del insdie es requerida',
    }),
});

// Validador para obtener un inside por medio de GET
const validatesSChemaGetInside = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del inside es requerido',
        'number.empty': 'El id del inside es requerido',
    }),
});


module.exports = {
    validatesSChemaCreateInside,
    validatesSChemaUpdatePutInside,
    validatesSChemaUpdatePatchInside,
    validatesSChemaGetInside,
}