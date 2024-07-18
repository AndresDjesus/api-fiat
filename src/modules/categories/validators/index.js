const Joi = require('joi');

// Validador para crear una categoria
const validatesSChemaCreateCategory = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la categoría es requerido',
        'string.empty': 'El nombre de la categoría es requerido',
    }),
});

// Validador para actualizar una categoria por medio de PUT
const validatesSChemaUpdatePutCategory = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la categoría es requerido',
        'string.empty': 'El nombre de la categoría es requerido',
    }),
});

// Validador para actualizar una categoria por medio de PATCH
const validatesSChemaUpdatePatchCategory = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la categoría es requerido',
        'string.empty': 'El nombre de la categoría es requerido',
    }),
});

// Validador para obtener una categoria por medio de GET
const validatesSChemaGetCategory = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la categoría es requerido',
        'string.empty': 'El nombre de la categoría es requerido',
    }),
});

// Validador para eliminar una categoria por medio de DELETE
const validatesSChemaDeleteCategory = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la categoría es requerido',
        'string.empty': 'El nombre de la categoría es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateCategory,
    validatesSChemaUpdatePutCategory,
    validatesSChemaUpdatePatchCategory,
    validatesSChemaGetCategory,
    validatesSChemaDeleteCategory
}