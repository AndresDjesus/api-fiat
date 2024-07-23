const Joi = require('joi');

// validador para crear una ubicación
const validatesSChemaCreateLocation = Joi.object({
    address: Joi.string().required().messages({
        'any.required': 'La ubicación es requerida',
        'string.empty': 'La ubicación es requerida',
    }),
    latitude: Joi.string().required().messages({
        'any.required': 'La latitud es requerida',
        'string.empty': 'La latitud es requerida',
    }),
    longitude: Joi.string().required().messages({
        'any.required': 'La longitud es requerida',
        'string.empty': 'La longitud es requerida',
    }),
})

// validador para actualizar una ubicación por medio de PUT
const validatesSChemaUpdatePutLocation = Joi.object({
    address: Joi.string().required().messages({
        'any.required': 'La ubicación es requerida',
        'string.empty': 'La ubicación es requerida',
    }),
    latitude: Joi.string().required().messages({
        'any.required': 'La latitud es requerida',
        'string.empty': 'La latitud es requerida',
    }),
    longitude: Joi.string().required().messages({
        'any.required': 'La longitud es requerida',
        'string.empty': 'La longitud es requerida',
    }),
})

// validador para actualizar una ubicación por medio de PATCH
const validatesSChemaUpdatePatchLocation = Joi.object({
    address: Joi.string().required().messages({
        'any.required': 'La ubicación es requerida',
        'string.empty': 'La ubicación es requerida',
    }),
    latitude: Joi.string().required().messages({
        'any.required': 'La latitud es requerida',
        'string.empty': 'La latitud es requerida',
    }),
    longitude: Joi.string().required().messages({
        'any.required': 'La longitud es requerida',
        'string.empty': 'La longitud es requerida',
    }),
})

// validador para obtener una ubicación por medio de GET ID
const validatesSChemaGetLocation = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id de la ubicación es requerido',
        'number.empty': 'El id de la ubicación es requerido',
    }),
})

// validador para eliminar una ubicación por medio de DELETE ID
const validatesSChemaDeleteLocation = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id de la ubicación es requerido',
        'number.empty': 'El id de la ubicación es requerido',
    }),
})

module.exports = {
    validatesSChemaCreateLocation,
    validatesSChemaUpdatePutLocation,
    validatesSChemaUpdatePatchLocation,
    validatesSChemaGetLocation,
    validatesSChemaDeleteLocation
}