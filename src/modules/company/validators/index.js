const Joi = require("joi")

// Validador para crear una empresa
const validatesSChemaCreateCompany = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la empresa es requerido',
        'string.empty': 'El nombre de la empresa es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'El nit de la empresa es requerido',
        'string.empty': 'El nit de la empresa es requerido',
    })

})

// Validador para actualizar una empresa por medio de PUT
const validatesSChemaUpdatePutCompany = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la empresa es requerido',
        'string.empty': 'El nombre de la empresa es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'El nit de la empresa es requerido',
        'string.empty': 'El nit de la empresa es requerido',
    })
})

// Validador para actualizar una empresa por medio de PATCH
const validatesSChemaUpdatePatchCompany = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la empresa es requerido',
        'string.empty': 'El nombre de la empresa es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'El nit de la empresa es requerido',
        'string.empty': 'El nit de la empresa es requerido',
    })
})

// Validador para obtener una empresa por medio de GET
const validatesSChemaGetCompany = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la empresa es requerido',
        'string.empty': 'El nombre de la empresa es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'El nit de la empresa es requerido',
        'string.empty': 'El nit de la empresa es requerido',
    })
})

// Validador para eliminar una empresa por medio de DELETE
const validatesSChemaDeleteCompany = Joi.object({
    name: Joi.string().required().messages({
        'any.required': 'El nombre de la empresa es requerido',
        'string.empty': 'El nombre de la empresa es requerido',
    }),
    description: Joi.string().required().messages({
        'any.required': 'El nit de la empresa es requerido',
        'string.empty': 'El nit de la empresa es requerido',
    })
})

module.exports = { validatesSChemaCreateCompany, validatesSChemaUpdatePutCompany, validatesSChemaUpdatePatchCompany, validatesSChemaGetCompany, validatesSChemaDeleteCompany }