const Joi = require('joi');

// Validador para crear un design
const validatesSChemaCreateDesign = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del design es requerido',
        'string.empty': 'El nombre del design es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del design es requerida',
        'string.empty': 'La descripción del design es requerida',
    }),
});

// Validador para actualizar un design por medio de PUT
const validatesSChemaUpdatePutDesign = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del design es requerido',
        'string.empty': 'El nombre del design es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del design es requerida',
        'string.empty': 'La descripción del design es requerida',
    }),
});

// Validador para actualizar un design por medio de PATCH
const validatesSChemaUpdatePatchDesign = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del design es requerido',
        'string.empty': 'El nombre del design es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción del design es requerida',
        'string.empty': 'La descripción del design es requerida',
    }),
});

// Validador para obtener un design por medio de GET
const validatesSChemaGetDesign = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del design es requerido',
        'number.empty': 'El id del design es requerido',
    }),
});


module.exports = {
    validatesSChemaCreateDesign,
    validatesSChemaUpdatePutDesign,
    validatesSChemaUpdatePatchDesign,
    validatesSChemaGetDesign,
}