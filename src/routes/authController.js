const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../models/user'); // Ajusta la ruta a tu modelo de usuario

const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Verificar credenciales en la base de datos
    const user = await User.findOne({ username });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar token JWT
    const token = jwt.sign({ userId: user._id }, 'tu_clave_secreta', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;