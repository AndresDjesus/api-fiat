const { getUserBy  } = require('../../user/services')
const { getIdRole } = require('../../role/services')
const { generateToken } = require('../../../utils/jwt')
const { hashString } = require('../../../utils/crypto')
const { INTERNAL_SERVER_ERROR, BAD_REQUEST, SUCCESS } = require('../../../common/constants')
const {loginSchema} = require('../schema/index')

const bcrypt = require('bcrypt'); // Asegúrate de tener instalado el paquete bcrypt


async function login(req, res){
    try {

        const { error } =  loginSchema.validate(req.body, {abortEarly: false})
        if (error) {
            let errors = []
            error.details.forEach((detail) => {
                errors.push(detail.message);
            });
            return res.status(BAD_REQUEST).send(errors.join(', '));
            
          }

        const { body: { username, password } } = req


        const user = await getUserBy('username', username, ['id', 'username', 'password'])

       

        if(!user) throw { message: 'User not found', status: BAD_REQUEST }
        if(user?.username !== username) throw { message: 'Username not match', status: BAD_REQUEST } 
        if(hashString(password) !== user?.password) throw { message: 'Password not match', status: BAD_REQUEST }

        const rolesByUser = await getIdRole(1, 10, user.id)
        const token = generateToken({...rolesByUser})

        res.status(SUCCESS).json({ code: 0, data: { token: token }, message: 'Login success' })      
    } catch (e) {
        const { message, status } = e         
        res.status(status || INTERNAL_SERVER_ERROR).json({ code: 1, message: message })
    }
}

module.exports = {
    login
}