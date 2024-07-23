const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createLocation = async (data) => {
    try {
        return await db.locations.create(data);
    } catch (e) {
        throw e;
    }
}

const getLocations = async () => {
    try {
        return await db.locations.findAll();
    } catch (e) {
        throw e;
    }
}

const updatePutLocation = async (id, data) => {
    try {
        return await db.locations.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const updatePatchLocation = async (id,data) => {
    try {
        return await db.locations.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteLocation = async (id) => {
    try {
        return await db.locations.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createLocation, getLocations, updatePutLocation, updatePatchLocation, deleteLocation
}


