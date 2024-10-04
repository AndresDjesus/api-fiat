const joi = require('joi');

// validador para crear un recurso
const validatesSChemaCreateResource = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    url: joi.string().required().messages({
        'any.required': 'La url es requerida',
        'string.empty': 'La url es requerida',
    }),
});

// validador para actualizar un recurso
const validatesSChemaUpdatePatchResource = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    url: joi.string().required().messages({
        'any.required': 'La url es requerida',
        'string.empty': 'La url es requerida',
    }),
});

// validador para actualizar un recurso
const validatesSChemaUpdatePutResource = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    url: joi.string().required().messages({
        'any.required': 'La url es requerida',
        'string.empty': 'La url es requerida',
    }),
});

// validador para borrar un recurso
const validatesSChemaDeleteResource = joi.object({
    id: joi.string().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateResource,
    validatesSChemaUpdatePatchResource,
    validatesSChemaUpdatePutResource,
    validatesSChemaDeleteResource
}