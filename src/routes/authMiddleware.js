const jwt = require('jsonwebtoken');
const { User } = require('../models/user'); // Ajusta la ruta según sea necesario

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No autorizado' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_clave_secreta'); // Reemplaza con tu clave secreta
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Token inválido' });
  }
};

module.exports = authMiddleware;