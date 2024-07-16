const Joi = require('joi');

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


module.exports = { validatesSChemaCreateVehicle }