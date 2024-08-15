const Joi = require('joi');
const combustible = require('../../../models/combustible');
const design = require('../../../models/design');
const technology = require('../../../models/technology');

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
    category_id: Joi.number().required().messages({
        'any.required': 'El id de la categoría es requerido',
        'number.empty': 'El id de la categoría es requerido',
    }),
    motor_id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
    combustible_id: Joi.number().required().messages({
        'any.required': 'El id del combustible es requerido',
        'number.empty': 'El id del combustible es requerido',
    }),
    inside_id: Joi.number().required().messages({
        'any.required': 'El id del inside es requerido',
        'number.empty': 'El id del inside es requerido',
    }),
    design_id: Joi.number().required().messages({
        'number.empty': 'El id del disenho es requerido',
        'any.required': 'El id del disenho es requerido',
    }),
    technology_id: Joi.number().required().messages({
        'number.empty': 'El id de la tecnología es requerido',
        'any.required': 'El id de la tecnología es requerido',
    }),
    description: Joi.string().messages({
        'string.empty': 'La descripción del vehímulo es requerida',
    }),
    transmission: Joi.string().valid('manual', 'automatic').required().messages({
        'string.empty': 'La transmision del vehímulo es requerida',
        'any.required': 'La transmision del vehímulo es requerida',
    }),
    screen: Joi.string().messages({
        'string.empty': 'La pantalla del vehímulo es requerida',
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
    category_id: Joi.number().required().messages({
        'any.required': 'El id de la categoría es requerido',
        'number.empty': 'El id de la categoría es requerido',
    }),
    motor_id: Joi.number().required().messages({
        'any.required': 'El id del motor es requerido',
        'number.empty': 'El id del motor es requerido',
    }),
    combustible_id: Joi.number().required().messages({
        'any.required': 'El id del combustible es requerido',
        'number.empty': 'El id del combustible es requerido',
    }),
    inside_id: Joi.number().required().messages({
        'any.required': 'El id del inside es requerido',
        'number.empty': 'El id del inside es requerido',
    }),
    design_id: Joi.number().required().messages({
        'number.empty': 'El id del disenho es requerido',
        'any.required': 'El id del disenho es requerido',
    }),
    technology_id: Joi.number().required().messages({
        'number.empty': 'El id de la tecnología es requerido',
        'any.required': 'El id de la tecnología es requerido',
    }),
    description: Joi.string().messages({
        'string.empty': 'La descripción del vehímulo es requerida',
    }),
    transmission: Joi.string().valid('manual', 'automatic').required().messages({
        'string.empty': 'La transmision del vehímulo es requerida',
        'any.required': 'La transmision del vehímulo es requerida',
    }),
    screen: Joi.string().messages({
        'string.empty': 'La pantalla del vehímulo es requerida',
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
    description: Joi.string().messages({
        'string.empty': 'La descripción del vehímulo es requerida',
    }),
    screen: Joi.string().messages({
        'string.empty': 'La pantalla del vehímulo es requerida',
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