const Joi = require('joi')

const loginSchema = Joi.object({
    username : Joi.string().required().messages({
        'any.required': ' Invalid Username' 
    }),
    password: Joi.string().required().messages({
        'any.required': 'Invalid password'
    })    
    
});




module.exports = {
    loginSchema
}