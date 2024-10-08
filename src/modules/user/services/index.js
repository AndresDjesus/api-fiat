const db = require('../../../utils/sequelize');

const bcrypt = require('bcrypt'); // Asegúrate de tener instalado el paquete bcrypt

const createUser = async (data) => {
    console.log(data || 'No dataaaaaaaaaaaaaaa');
    try {
    // Hashea la contraseña antes de guardarla
    if (!data.username || !data.username.trim() === '') {
        throw new Error('El campo username es obligatorio');
    }
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    // Actualiza los datos con la contraseña hasheada
    const userData = {
        ...data,
        password: hashedPassword
    };

    const user = await db.user.create(userData);
    return user;
    } catch (error) {
    console.error('Error al crear el usuario:', error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new Error('El correo electrónico ya está en uso');
    } else {
      throw new Error('Error inesperado al crear el usuario');
    }
  }
};

const getUser = async () => {
    const user = await db.user.findAll({
        attributes: ['id', 'username', 'email', 'password'],
        include: [
            {
                model: db.role,
                as: 'role',
                attributes: ['id', 'name']
            },
            
        ]
    });
    return user;
};

async function getUserBy (param, value, attributes = ['id', 'username', 'password']) {
    try {
        const user = await db.user.findOne({ where: { [param]: value }, attributes: attributes })
        return user 
    } catch (e) {
        const error = new Error(e.message)
        error.status = INTERNAL_SERVER_ERROR
        throw error
    }
}


const updateUserPut = async (id, data) => {
    const user = await db.user.update(data, { where: { id } });
    return user;
};

const updateUserPatch = async (id, data) => {
    const user = await db.user.update(data, { where: { id } });
    return user;
};

const deleteUser = async (id) => {
    const user = await db.user.destroy({ where: { id } });
    return user;
};

module.exports = {
    createUser,
    getUser,
    getUserBy,
    updateUserPut,
    updateUserPatch,
    deleteUser
}