const Joi = require('joi');

// Validador para crear un vehículo 
const validatesSChemaCreateVehicle = Joi.object({
    name: Joi.string().required().messages(
        {
            'any.required': 'El nombre del vehículo es requerido',
            'string.empty': 'El nombre del vehículo es requerido',
        }
    ),
    year: Joi.string().required().messages(
        {
            'any.required': 'El año del vehículo es requerido',
            'string.empty': 'El año del vehículo es requerido',
        }
    ),
    price: Joi.string().required().messages({
        'any.required': 'El precio del vehículo es requerido',
        'string.empty': 'El precio del vehículo es requerido',
    }),
});

// Validador para actualizar un vehículo por medio de PUT
const validatesSChemaUpdatePutVehicle = Joi.object({
    name: Joi.string().required().messages(
        {
            'any.required': 'El nombre del vehículo es requerido',
            'string.empty': 'El nombre del vehículo es requerido',
        }
    ),
    year: Joi.string().required().messages(
        {
            'any.required': 'El año del vehículo es requerido',
            'string.empty': 'El año del vehículo es requerido',
        }
    ),
    price: Joi.string().required().messages({
        'any.required': 'El precio del vehículo es requerido',
        'string.empty': 'El precio del vehículo es requerido',
    }),
});

// Validador para actualizar un vehículo por medio de PATCH
const validatesSChemaUpdatePatchVehicle = Joi.object({
    name: Joi.string().required().messages(
        {
            'any.required': 'El nombre del vehículo es requerido',
            'string.empty': 'El nombre del vehículo es requerido',
        }
    ),
    year: Joi.string().required().messages(
        {
            'any.required': 'El año del vehículo es requerido',
            'string.empty': 'El año del vehículo es requerido',
        }
    ),
    price: Joi.string().required().messages({
        'any.required': 'El precio del vehículo es requerido',
        'string.empty': 'El precio del vehículo es requerido',
    }),
});

// Validador para obtener un vehículo por medio de GET ID
const validatesSChemaGetVehicle = Joi.object({
    id: Joi.number().required().messages(
        {
            'any.required': 'El id del vehículo es requerido',
            'number.empty': 'El id del vehículo es requerido',
        }
    ),
});

// Validador para eliminar un vehículo por medio de DELETE ID
const validatesSChemaDeleteVehicle = Joi.object({
    id: Joi.string().required().messages(
        {
            'any.required': 'El id del vehículo es requerido',
            'string.empty': 'El id del vehículo es requerido',
        }
    ),
});

module.exports = { validatesSChemaCreateVehicle ,validatesSChemaUpdatePutVehicle, validatesSChemaUpdatePatchVehicle, validatesSChemaGetVehicle, validatesSChemaDeleteVehicle } 