const Joi = require('joi');

// validador para crear un blog
const validatesSChemaCreateBlog = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del blog es requerido',
        'string.empty': 'El nombre del blog es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'El contenido del blog es requerido',
        'string.empty': 'El contenido del blog es requerido',
    }),
    date: Joi.date().required().messages({
        'any.required': 'La fecha del blog es requerida',
        'date.base': 'La fecha del blog es requerida',
    }),
});

// validador para actualizar un blog por medio de PUT
const validatesSChemaUpdatePutBlog = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del blog es requerido',
        'string.empty': 'El nombre del blog es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'El contenido del blog es requerido',
        'string.empty': 'El contenido del blog es requerido',
    }),
    date: Joi.date().required().messages({
        'any.required': 'La fecha del blog es requerida',
        'date.base': 'La fecha del blog es requerida',
    }),
});

// validador para actualizar un blog por medio de PATCH
const validatesSChemaUpdatePatchBlog = Joi.object({
    title: Joi.string().required().messages({
        'any.required': 'El nombre del blog es requerido',
        'string.empty': 'El nombre del blog es requerido',
    }),
    content: Joi.string().required().messages({
        'any.required': 'El contenido del blog es requerido',
        'string.empty': 'El contenido del blog es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'La descripción del blog es requerida',
        'string.empty': 'La descripción del blog es requerida',
    }),
    date: Joi.date().required().messages({
        'any.required': 'La fecha del blog es requerida',
    }),
});

module.exports = {
    validatesSChemaCreateBlog,
    validatesSChemaUpdatePutBlog,
    validatesSChemaUpdatePatchBlog
}