const Joi = require('joi');

// Validador para crear una Technology
const validatesSChemaCreateTechnology = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre de la technology es requerido',
        'string.empty': 'El nombre de la technology es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción de la technology es requerida',
        'string.empty': 'La descripción de la technology es requerida',
    }),
});

// Validador para actualizar una Technology por medio de PUT
const validatesSChemaUpdatePutTechnology = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre de la technology es requerido',
        'string.empty': 'El nombre de la technology es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción de la technology es requerida',
        'string.empty': 'La descripción de la technology es requerida',
    }),
});

// Validador para actualizar una Technology por medio de PATCH
const validatesSChemaUpdatePatchTechnology = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre de la technology es requerido',
        'string.empty': 'El nombre de la technology es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción de la technology es requerida',
        'string.empty': 'La descripción de la technology es requerida',
    }),
});

// Validador para obtener una Technology por medio de GET
const validatesSChemaGetTechnologys = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id de la technology es requerido',
        'number.empty': 'El id de la technology es requerido',
    }),
});


module.exports = {
    validatesSChemaCreateTechnology,
    validatesSChemaUpdatePutTechnology,
    validatesSChemaUpdatePatchTechnology,
    validatesSChemaGetTechnologys,
}