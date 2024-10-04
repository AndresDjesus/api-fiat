const db = require('../../../utils/sequelize');

const createPermission = async (data) => {
    const permission = await db.permission.create(data);
    return permission;
};

const getPermissions = async () => {
    const permissions = await db.permission.findAll({
        atributte : ['id', 'name', 'execute', 'read', 'write'],
        include: [
            {
                model: db.resource,
                as: 'resource',
                attributes: ['name']
            }
        ]
    });
    return permissions;
};

const getIdPermission = async (id) => {
    try {
        return await db.permission.findByPk(id , {
            attributes: ['id', 'name', 'execute', 'read', 'write'],
            include: [
                {
                    model: db.resource,
                    as: 'resource',
                    attributes: ['name']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutPermission = async (id, data) => {
    const permission = await db.permission.update({ ...data }, { where: { id } });
    return permission;
};

const updatePatchPermission = async (id,data) => {
    const permission = await db.permission.update({ ...data }, { where: { id } });
    return permission;
};

const deletePermission = async (id) => {
    const permission = await db.permission.destroy({ where: { id } });
    return permission;
};

module.exports = {
    createPermission,
    getPermissions,
    getIdPermission,
    updatePutPermission,
    updatePatchPermission,
    deletePermission
}

