const db = require('../../../utils/sequelize');

const createRole = async (body) => {
    const role = await db.role.create(body);
    return role;
}

const getRoles = async () => {
    const roles = await db.role.findAll({
        attributes: ['id', 'name'],
        include: [
            {
                model: db.permission,
                as: 'permission',
                attributes: ['id', 'name']
            }
        ]
    });
    return roles;
}

const getIdRole = async (id) => {
    const role = await db.role.findByPk(id, {
        attributes: ['id', 'name'],
        include: [
            {
                model: db.permission,
                as: 'permission',
                attributes: ['id', 'name']
            }
        ]
    });
    return role;
}

const updatePutRole = async (id, body) => {
    const role = await db.role.update(body, {
        where: {
            id
        }
    });
    return role;
}

const updatePatchRole = async (id, body) => {
    const role = await db.role.update(body, {
        where: {
            id
        }
    });
    return role;
}

const deleteRole = async (id) => {
    const role = await db.role.destroy({
        where: {
            id
        }
    });
    return role;
}

module.exports = {
    createRole,
    getRoles,
    getIdRole,
    updatePutRole,
    updatePatchRole,
    deleteRole
}