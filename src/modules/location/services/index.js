const {date} = require('joi');
const db = require('../../../utils/sequelize');
const company = require('../../../models/company');

const createLocation = async (data) => {
    try {
        return await db.location.create(data);
    } catch (e) {
        throw e;
    }
}

const getLocations = async () => {
    try {
        return await db.location.findAll( {
            include: [
                {
                    model: db.company,
                    as: 'location',
                    attributes: ['name']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const getIdLocation = async (id) => {
    try {
        return await db.location.findByPk(id , {
            include: [
                {
                    model: db.company,
                    attributes: ['name']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutLocation = async (id, data) => {
    try {
        return await db.location.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const updatePatchLocation = async (id,data) => {
    try {
        return await db.location.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteLocation = async (id) => {
    try {
        return await db.location.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createLocation, getLocations, updatePutLocation, updatePatchLocation, deleteLocation, getIdLocation
}


