const Joi = require("joi")

// Validador para crear una empresa
const validatesSChemaCreateCompanyProfile = Joi.object({
    active : Joi.boolean().messages({
       'number.empty': 'El estado de la empresa es requerido',
    }),
    company_id : Joi.number().required().messages({
        'any.required': 'El id de la empresa es requerido',
        'number.empty': 'El id de la empresa es requerido',
    }),
    mission: Joi.string().required().messages({
        'any.required': 'La misión de la empresa es requerida',
        'string.empty': 'La misión de la empresa es requerida',
    }),
    vision: Joi.string().required().messages({
        'any.required': 'La visión de la empresa es requerida',
        'string.empty': 'La visión de la empresa es requerida',
    }),
    history: Joi.string().required().messages({
        'any.required': 'El historial de la empresa es requerido',
        'string.empty': 'El historial de la empresa es requerido',
    }),
    schedule: Joi.string().required().messages({
        'any.required': 'El horario de la empresa es requerido',
        'string.empty': 'El horario de la empresa es requerido',
    })
})

// Validador para actualizar una empresa por medio de PUT
const validatesSChemaUpdatePutCompanyProfile = Joi.object({
    active : Joi.boolean().messages({
       'number.empty': 'El estado de la empresa es requerido',
    }),
    company_id : Joi.number().required().messages({
        'any.required': 'El id de la empresa es requerido',
        'number.empty': 'El id de la empresa es requerido',
    }),
    mission: Joi.string().required().messages({
        'any.required': 'La misión de la empresa es requerida',
        'string.empty': 'La misión de la empresa es requerida',
    }),
    vision: Joi.string().required().messages({
        'any.required': 'La visión de la empresa es requerida',
        'string.empty': 'La visión de la empresa es requerida',
    }),
    history: Joi.string().required().messages({
        'any.required': 'El historial de la empresa es requerido',
        'string.empty': 'El historial de la empresa es requerido',
    }),
    schedule: Joi.string().required().messages({
        'any.required': 'El horario de la empresa es requerido',
        'string.empty': 'El horario de la empresa es requerido',
    })
})

// Validador para actualizar una empresa por medio de PATCH
const validatesSChemaUpdatePatchCompanyProfile = Joi.object({
    active : Joi.boolean().messages({
        'number.empty': 'El estado de la empresa es requerido',
     }),
    company_id : Joi.number().required().messages({
        'any.required': 'El id de la empresa es requerido',
        'number.empty': 'El id de la empresa es requerido',
    }),
    mission: Joi.string().required().messages({
        'any.required': 'La misión de la empresa es requerida',
        'string.empty': 'La misión de la empresa es requerida',
    }),
    vision: Joi.string().required().messages({
        'any.required': 'La visión de la empresa es requerida',
        'string.empty': 'La visión de la empresa es requerida',
    }),
    history: Joi.string().required().messages({
        'any.required': 'El historial de la empresa es requerido',
        'string.empty': 'El historial de la empresa es requerido',
    }),
    schedule: Joi.string().required().messages({
        'any.required': 'El horario de la empresa es requerido',
        'string.empty': 'El horario de la empresa es requerido',
    })
})

// Validador para obtener una empresa por medio de GET
const validatesSChemaGetCompanyProfile = Joi.object({
    mission: Joi.string().required().messages({
        'any.required': 'La misión de la empresa es requerida',
        'string.empty': 'La misión de la empresa es requerida',
    }),
    vision: Joi.string().required().messages({
        'any.required': 'La visión de la empresa es requerida',
        'string.empty': 'La visión de la empresa es requerida',
    }),
    history: Joi.string().required().messages({
        'any.required': 'El historial de la empresa es requerido',
        'string.empty': 'El historial de la empresa es requerido',
    }),
    schedule: Joi.string().required().messages({
        'any.required': 'El horario de la empresa es requerido',
        'string.empty': 'El horario de la empresa es requerido',
    })
})


module.exports = {
    validatesSChemaCreateCompanyProfile,
    validatesSChemaUpdatePutCompanyProfile,
    validatesSChemaUpdatePatchCompanyProfile,
    validatesSChemaGetCompanyProfile
}