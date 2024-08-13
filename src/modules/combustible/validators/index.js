const Joi = require('joi');

// Validador para crear un motor
const validatesSChemaCreateCombustible = Joi.object({
    ciudad: Joi.string().required().messages({
        'any.required': 'El combustible en ciudad es requerido',
        'string.empty': 'El combustible en ciudad es requerido',
    }),
    carretera: Joi.string().required().messages({
        'any.required': 'El combustible en carretera es requerido',
        'string.empty': 'El combustible en carretera es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
});

// Validador para actualizar un motor por medio de PUT
const validatesSChemaUpdatePutCombustible = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El combustible es requerido',
        'string.empty': 'El combustible es requerido',
    }),
    ciudad: Joi.string().required().messages({
        'any.required': 'El combustible en ciudad es requerido',
        'string.empty': 'El combustible en ciudad es requerido',
    }),
    carretera: Joi.string().required().messages({
        'any.required': 'El combustible en carretera es requerido',
        'string.empty': 'El combustible en carretera es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
});

// Validador para actualizar un motor por medio de PATCH
const validatesSChemaUpdatePatchCombustible = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El combustible es requerido',
        'string.empty': 'El combustible es requerido',
    }),
    ciudad: Joi.string().required().messages({
        'any.required': 'El combustible en ciudad es requerido',
        'string.empty': 'El combustible en ciudad es requerido',
    }),
    carretera: Joi.string().required().messages({
        'any.required': 'El combustible en carretera es requerido',
        'string.empty': 'El combustible en carretera es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripcion es requerida',
        'string.empty': 'La descripcion es requerida',
    }),
});

// Validador para obtener un motor por medio de GET ID
const validatesSChemaGetIdCombustible = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
});

// Validador para eliminar un motor por medio de DELETE ID
const validatesSChemaDeleteCombustible = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateCombustible,
    validatesSChemaUpdatePutCombustible,
    validatesSChemaUpdatePatchCombustible,
    validatesSChemaGetIdCombustible,
    validatesSChemaDeleteCombustible
}