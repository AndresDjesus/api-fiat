const db = require('../../../utils/sequelize');

const createUser = async (data) => {
    const user = await db.user.create(data);
    return user;
};

const getUser = async () => {
    const user = await db.user.findAll({
        attributes: ['id', 'username', 'email', 'password'],
        include: [
            {
                model: db.role,
                as: 'role',
                attributes: ['id', 'name']
            }
        ]
    });
    return user;
};

const getIdUser = async (id) => {
    try {
        return await db.user.findByPk(id , {
            attributes: ['id', 'username', 'email', 'password'],
            include: [
                {
                    model: db.role,
                    as: 'role',
                    attributes: ['id', 'name']
                }
            ]
        });
    } catch (e) {
        throw e;
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
    getIdUser,
    updateUserPut,
    updateUserPatch,
    deleteUser
}