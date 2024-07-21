const Joi = require('joi');

// Validador para crear un servicio
const validatesSChemaCreateService = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del servicio es requerido',
        'string.empty': 'El nombre del servicio es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripción del servicio es requerida',
        'string.empty': 'La descripción del servicio es requerida',
    }),
});

// Validador para actualizar un servicio por medio de PUT
const validatesSChemaUpdatePutService = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del servicio es requerido',
        'string.empty': 'El nombre del servicio es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripción del servicio es requerida',
        'string.empty': 'La descripción del servicio es requerida',
    }),
});

// Validador para actualizar un servicio por medio de PATCH
const validatesSChemaUpdatePatchService = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del servicio es requerido',
        'string.empty': 'El nombre del servicio es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripción del servicio es requerida',
        'string.empty': 'La descripción del servicio es requerida',
    }),
});

// Validador para obtener un servicio por medio de GET
const validatesSChemaGetService = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del servicio es requerido',
        'number.empty': 'El id del servicio es requerido',
    }),
});


module.exports = {
    validatesSChemaCreateService,
    validatesSChemaUpdatePutService,
    validatesSChemaUpdatePatchService,
    validatesSChemaGetService,
}