const e = require('express');
const joi = require('joi');
const role = require('../../../models/role');

// Validador para crear un permission 
const validatesSChemaCreatePermission = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    execute : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    read : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    write : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    resource_id : joi.string().required().messages({
        'any.required': 'El id del recurso es requerido',
        'string.empty': 'El id del recurso es requerido',
    }),
    role_id : joi.string().required().messages({
        'any.required': 'El id del rol es requerido',
        'string.empty': 'El id del rol es requerido',
    })
});

// Validador para actualizar un permission por medio de PUT
const validatesSChemaUpdatePutPermission = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    execute : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    read : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    write : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
});

// Validador para actualizar un permission por medio de PATCH
const validatesSChemaUpdatePatchPermission = joi.object({
    name: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    execute : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    read : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
    write : joi.string().valid('true', 'false').required().messages({
        'any.required': 'La accion es requerida',
        'string.empty': 'La accion es requerida',
    }),
});

// Validador para obtener un permission por medio de GET
const validatesSChemaGetPermission = joi.object({
    id: joi.string().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

// Validador para eliminar un permission por medio de DELETE
const validatesSChemaDeletePermission = joi.object({
    id: joi.string().required().messages({
        'any.required': 'El id es requerido',
        'string.empty': 'El id es requerido',
    }),
});

module.exports = {
    validatesSChemaCreatePermission,
    validatesSChemaUpdatePutPermission,
    validatesSChemaUpdatePatchPermission,
    validatesSChemaGetPermission,
    validatesSChemaDeletePermission
}