const db = require('../../../utils/sequelize');

const createVehicle = async (data) => {
    try {
        return await db.vehicles.create(data);
    } catch (e) {
        throw e;
    }
}

const getVehicles = async () => {
    try {
        return await db.vehicles.findAll({
            include: [
                {
                    model: db.images,
                    as: 'images',
                    attributes: ['id', 'base64', 'principal']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}
const getIdVehicle = async (id) => {
    try {
        return await db.vehicles.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutVehicle = async (id, data) => {
    try {
        
        return await db.vehicles.update({ ...data }, { where: { id } });

    } catch (e) {
        throw e;
    }
}

const updatePatchVehicle = async (id, data) => {
    try {
        return await db.vehicles.update({ ...data }, { where: { id } });

    } catch (e) {
        throw e;
    }
}

const deleteVehicle = async (id) => {
    try {
        return await db.vehicles.destroy({ where: { id } });

    } catch (e) {
        throw e;
    }
}
module.exports = {
    createVehicle, getVehicles, getIdVehicle, updatePutVehicle, updatePatchVehicle, deleteVehicle
}