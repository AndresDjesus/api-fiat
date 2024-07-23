const Joi = require('joi');

// validador para crear una imagen
const validatesSChemaCreateImage = Joi.object({
    principal: Joi.boolean().required().messages({
        'any.required': 'El estado de la imagen es requerido',
        'boolean.empty': 'El estado de la imagen es requerido',
    }),
    base64: Joi.string().required().messages({
        'any.required': 'La imagen es requerida',
        'string.empty': 'La imagen es requerida',
    }),
    vehicle_id: Joi.number().messages({
        'number.empty': 'El id del vehículo es requerido'
    }),
    service_id: Joi.number().messages({
        'number.empty': 'El id del servicio es requerido'
    }),
    company_id: Joi.number().messages({
        'number.empty': 'El id de la empresa es requerido'
    }),

});

// validador para actualizar una imagen por medio de PUT
const validatesSChemaUpdatePutImage = Joi.object({

    principal: Joi.boolean().required().messages({
        'any.required': 'El estado de la imagen es requerido',
        'boolean.empty': 'El estado de la imagen es requerido',
    }),
    base64: Joi.string().required().messages({
        'any.required': 'La imagen es requerida',
        'string.empty': 'La imagen es requerida',
    }),
    vehicle_id: Joi.number().messages({
        'number.empty': 'El id del vehículo es requerido',
    }),
    service_id: Joi.number().messages({
        'number.empty': 'El id del servicio es requerido',
    }),
    company_id: Joi.number().messages({
        'number.empty': 'El id de la empresa es requerido',
    }),
});

// validador para actualizar una imagen por medio de PATCH
const validatesSChemaUpdatePatchImage = Joi.object({

    principal: Joi.boolean().required().messages({
        'any.required': 'El estado de la imagen es requerido',
        'boolean.empty': 'El estado de la imagen es requerido',
    }),
    base64: Joi.string().required().messages({
        'any.required': 'La imagen es requerida',
        'string.empty': 'La imagen es requerida',
    }),
    vehicle_id: Joi.number().required().messages({
        'any.required': 'El id del vehículo es requerido',
        'number.empty': 'El id del vehículo es requerido',
    }),
    service_id: Joi.number().required().messages({
        'any.required': 'El id del servicio es requerido',
        'number.empty': 'El id del servicio es requerido',
    }),
    company_id: Joi.number().required().messages({
        'any.required': 'El id de la empresa es requerido',
        'number.empty': 'El id de la empresa es requerido',
    }),
    
});

// validador para obtener una imagen por medio de GET ID
const validatesSChemaGetImage = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id de la imagen es requerido',
        'number.empty': 'El id de la imagen es requerido',
    }),
    
});

// validador para eliminar una imagen por medio de DELETE ID
const validatesSChemaDeleteImage = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id de la imagen es requerido',
        'number.empty': 'El id de la imagen es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateImage,
    validatesSChemaUpdatePutImage,
    validatesSChemaUpdatePatchImage,
    validatesSChemaGetImage,
    validatesSChemaDeleteImage
}
