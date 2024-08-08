const Joi = require('joi');

// Validador para crear un index
const validatesSChemaCreateIndex = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    buyVehicletitle: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    buyVehiclecontent: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    WhiWe : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    LookingforVehicle : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
});

// Validador para actualizar un index por medio de PUT
const validatesSChemaUpdatePutIndex = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    buyVehicletitle: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    buyVehiclecontent: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    WhiWe : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',  
    }),
    LookingforVehicle : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
});

// Validador para actualizar un index por medio de PATCH
const validatesSChemaUpdatePatchIndex = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',   
    }),
    content: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    buyVehicletitle: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    buyVehiclecontent: Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    WhiWe : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
    LookingforVehicle : Joi.string().required().messages({
        'any.required': 'La descripción es requerida',
        'string.empty': 'La descripción es requerida',
    }),
});

// Validador para obtener un index por medio de GET
const validatesSChemaGetIndex = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id es requerido',
        'number.empty': 'El id es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateIndex,
    validatesSChemaUpdatePutIndex,
    validatesSChemaUpdatePatchIndex,
    validatesSChemaGetIndex,
}