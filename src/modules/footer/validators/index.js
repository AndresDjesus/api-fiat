const Joi = require('joi');

// Validador para crear un footer
const validatesSChemaCreateFooter = Joi.object({
  address: Joi.string().required().messages({
    'any.required': 'La ubicación es requerida',
    'string.empty': 'La ubicación es requerida',
  }),
  email: Joi.string().required().messages({
    'any.required': 'El correo es requerido',
    'string.empty': 'El correo es requerido'
  }),
  phone: Joi.string().required().messages({
    'any.required': 'El telefono es requerido',
    'string.empty': 'El telefono es requerido',
  }),
  social_networks: Joi.object().required().keys({
    gmail: Joi.object().keys({
      username: Joi.string().email().required(),
      url: Joi.string().uri().optional()
    }).required(),
    instagram: Joi.object().keys({
      username: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
    whatsapp: Joi.object().keys({
      number: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
  })
});

// Validador para actualizar un footer por medio de PUT
const validatesSChemaUpdatePutFooter = Joi.object({
  address: Joi.string().required().messages({
    'any.required': 'La ubicación es requerida',
    'string.empty': 'La ubicación es requerida',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'El correo es requerido',
    'string.empty': 'El correo es requerido',
    'string.email': 'El correo electrónico debe ser válido',
  }),
  phone: Joi.string().required().messages({
    'any.required': 'El telefono es requerido',
    'string.empty': 'El telefono es requerido',
  }),
  social_networks: Joi.object().required().keys({
    gmail: Joi.object().keys({
      username: Joi.string().email().required(),
      url: Joi.string().uri().optional()
    }).required(),
    instagram: Joi.object().keys({
      username: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
    whatsapp: Joi.object().keys({
      number: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
  })
});

// Validador para actualizar un footer por medio de PATCH
const validatesSChemaUpdatePatchFooter = Joi.object({
  address: Joi.string().required().messages({
    'any.required': 'La ubicación es requerida',
    'string.empty': 'La ubicación es requerida',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'El correo es requerido',
    'string.empty': 'El correo es requerido',
    'string.email': 'El correo electrónico debe ser válido',
  }),
  phone: Joi.string().required().messages({
    'any.required': 'El telefono es requerido',
    'string.empty': 'El telefono es requerido',
  }),
  social_networks: Joi.object().required().keys({
    gmail: Joi.object().keys({
      username: Joi.string().email().required(),
      url: Joi.string().uri().optional()
    }).required(),
    instagram: Joi.object().keys({
      username: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
    whatsapp: Joi.object().keys({
      number: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
  })
});

// Validador para obtener un footer por medio de GET
const validatesSChemaGetFooter = Joi.object({
  address: Joi.string().required().messages({
    'any.required': 'La ubicación es requerida',
    'string.empty': 'La ubicación es requerida',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'El correo es requerido',
    'string.empty': 'El correo es requerido',
    'string.email': 'El correo electrónico debe ser válido',
  }),
  phone: Joi.string().required().messages({
    'any.required': 'El telefono es requerido',
    'string.empty': 'El telefono es requerido',
  }),
  social_networks: Joi.object().required().keys({
    gmail: Joi.object().keys({
      username: Joi.string().email().required(),
      url: Joi.string().uri().optional()
    }).required(),
    instagram: Joi.object().keys({
      username: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
    whatsapp: Joi.object().keys({
      number: Joi.string().required(),
      url: Joi.string().uri().optional()
    }).required(),
  })
});


module.exports = { validatesSChemaCreateFooter, validatesSChemaUpdatePutFooter, validatesSChemaUpdatePatchFooter, validatesSChemaGetFooter }