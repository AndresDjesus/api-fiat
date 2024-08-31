const db = require('../../../utils/sequelize');

const createService = async (data) => {
    try {
        return await db.services.create(data);
    } catch (e) {
        throw e;
    }
}

const getServices = async () => {
    try {

        return await db.services.findAll({
            attributes: ['id', 'name', 'description'],
            include: [
                {
                    model: db.images,
                    attributes: ['id','principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}   

const getIdService = async (id) => {
    try {
        return await db.services.findByPk(id , {
            attributes: ['id', 'name', 'description'],
            include: [
                {
                    model: db.images,
                    attributes: ['id','principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutService = async (id, data) => {
    try {
        return await db.services.update(data, {
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}

const updatePatchService = async (id, data) => {
    try {
        return await db.services.update(data, {
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}

const deleteService = async (id) => {
    try {
        return await db.services.destroy({
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createService,
    getServices,
    getIdService,
    updatePutService,
    updatePatchService,
    deleteService
}