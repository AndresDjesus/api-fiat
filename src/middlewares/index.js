const { BAD_REQUEST, VENEZUELAN_ID_REGEX, UNAUTHORIZED, BEARER_PREFIX } = require("../common/constants")
const {verifyToken} = require("../utils/jwt")

   // Middleware para verificar el token en las rutas protegidas
   function verifyTokenMiddleware(req, res, next) {
    try {
        const token = req.headers?.authorization?.split(BEARER_PREFIX).pop();
        if(!token){
            throw new Error('Error token require');
        }
        const result = verifyToken(token)
        if(!result){
            throw new Error ('Error in authenticate user');
        }
        next()
    }catch(e){
        return res.status(UNAUTHORIZED).send({ code : 1, message : e.message});
    }

  }


function paginationMiddleware(req, res, next) {
    try {
        const { query: { pageNumber, pageSize } } = req
        if(!Number.isInteger(parseInt(pageNumber))) throw new Error('Query param pageNumber should be integer')
        if(!Number.isInteger(parseInt(pageSize))) throw new Error('Query param pageSize should be integer')
        
        req.query.pageNumber = parseInt(pageNumber)
        req.query.pageSize = parseInt(pageSize)
        next()
    } catch (e) {
        return res.status(BAD_REQUEST).send({ code: 1, message: e.message })       
    }
}

module.exports = {
    paginationMiddleware,
    verifyTokenMiddleware
}