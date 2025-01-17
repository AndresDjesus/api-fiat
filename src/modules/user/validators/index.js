const joi = require('joi');

// Validador para crear un usuario
const validatesSChemaCreateUser = joi.object({
    username: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    email: joi.string().required().messages({
        'any.required': 'El correo es requerido',
        'string.empty': 'El correo es requerido',
    }),
    password: joi.string().required().messages({
        'any.required': 'La contraseña es requerida',
        'string.empty': 'La contraseña es requerida',
    }),
    role_id: joi.number().required().messages({
        'any.required': 'El id del rol es requerido',
        'number.empty': 'El id del rol es requerido',
    }),
})

// Validador para actualizar un usuario por medio de PUT
const validatesSChemaUpdatePutUser = joi.object({
    username: joi.string().required().messages({
        'any.required': 'El nombre es requerido',
        'string.empty': 'El nombre es requerido',
    }),
    email: joi.string().required().messages({
        'any.required': 'El correo es requerido',
        'string.empty': 'El correo es requerido',
    }),
    password: joi.string().required().messages({
        'any.required': 'La contraseña es requerida',
        'string.empty': 'La contraseña es requerida',
    }),
    role_id: joi.number().required().messages({
        'any.required': 'El id del rol es requerido',
        'number.empty': 'El id del rol es requerido',
    }),
})

// Validador para actualizar un usuario por medio de PATCH
const validatesSChemaUpdatePatchUser = joi.object({
    username: joi.string().required().messages({
        'any.required': 'El nombre del motor es requerido',
        'string.empty': 'El nombre del motor es requerido',
    }),
    email: joi.string().required().messages({
        'any.required': 'El correo es requerido',
        'string.empty': 'El correo es requerido',
    }),
    password: joi.string().required().messages({
        'any.required': 'La contraseña es requerida',
        'string.empty': 'La contraseña es requerida',
    }),
    role_id: joi.number().required().messages({
        'any.required': 'El id del rol es requerido',
        'number.empty': 'El id del rol es requerido',
    }),
});

// Validador para obtener un usuario por medio de GET ID
const validatesSChemaGetUser = joi.object({
    id: joi.number().required().messages({
        'any.required': 'El id es requerido',
        'number.empty': 'El id es requerido',
    }),
})

// Validador para eliminar un usuario por medio de DELETE ID
const validatesSChemaDeleteUser = joi.object({
    id: joi.number().required().messages({
        'any.required': 'El id es requerido',
        'number.empty': 'El id es requerido',
    }),
})

module.exports = {
    validatesSChemaCreateUser,
    validatesSChemaUpdatePutUser,
    validatesSChemaUpdatePatchUser,
    validatesSChemaGetUser,
    validatesSChemaDeleteUser
}