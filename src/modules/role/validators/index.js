const Joi = require('joi');

// Validador para crear un role
const validatesSChemaCreateRoles = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
    permission_id: Joi.number().required().messages({
        'any.required': 'El id del permiso es requerido',
        'string.empty': 'El id del permiso es requerido',
    }),
});

// Validador para actualizar un role por medio de PUT
const validatesSChemaUpdatePutRole = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    permission_id: Joi.number().required().messages({
        'any.required': 'El id del permiso es requerido',
        'string.empty': 'El id del permiso es requerido',
    }),
});

// Validador para actualizar un role por medio de PATCH
const validatesSChemaUpdatePatchRole = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    permission_id: Joi.number().required().messages({
        'any.required': 'El id del permiso es requerido',
        'string.empty': 'El id del permiso es requerido',
    }),
});

// Validador para obtener un role por medio de GET
const validatesSChemaGetRole = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

// Validador para eliminar un role por medio de DELETE
const validatesSChemaDeleteRole = Joi.object({
    id: Joi.number().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

module.exports = {
    validatesSChemaCreateRoles,
    validatesSChemaUpdatePutRole,
    validatesSChemaUpdatePatchRole,
    validatesSChemaGetRole,
    validatesSChemaDeleteRole
}