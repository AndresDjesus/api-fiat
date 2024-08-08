const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createIndex = async (data) => {
    try {
        return await db.index.create(data);
    } catch (e) {
        throw e;
    }
}

const getIndexes = async () => {
    try {
        return await db.index.findAll( {
            include: [
                {
                    model: db.images,
                    attributes: ['principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const getIdIndex = async (id) => {
    try {
        return await db.index.findByPk(id , {
            include: [
                {
                    model: db.images,
                    attributes: ['principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutIndex = async (id, data) => {
    try {
        return await db.index.update({ ...data }, { where: { id } });
    } catch (e) {
        throw e;
    }
}

const updatePatchIndex = async (id,data) => {
    try {
        return await db.index.update({ ...data }, { where: { id } });
    } catch (e) {
        throw e;
    }
}

const deleteIndex = async (id) => {
    try {
        return await db.index.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}

module.exports = { createIndex, getIndexes, getIdIndex, updatePutIndex, updatePatchIndex, deleteIndex }