const db = require('../../../utils/sequelize');

const createResource = async (data) => {
    const resource = await db.resource.create(data);
    return resource;
};

const getResource = async () => {
    const resource = await db.resource.findAll();
    return resource;
};

const getIdResource = async (id) => {
    try {
        return await db.resource.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutResource = async (id, data) => {
    const resource = await db.resource.update({ ...data }, { where: { id } });
    return resource;
};

const updatePatchResource = async (id,data) => {
    const resource = await db.resource.update({ ...data }, { where: { id } });
    return resource;
};

const deleteResource = async (id) => {
    const resource = await db.resource.destroy({ where: { id } });
    return resource;
};

module.exports = {
    createResource,
    getResource,
    getIdResource,
    updatePutResource,
    updatePatchResource,
    deleteResource
}

