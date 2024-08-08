const {date } = require('joi');
const db = require('../../../utils/sequelize');


const createAdvertising = async (data) => {
    try {
        return await db.advertising.create(data);
    } catch (e) {
        throw e;
    }
}

const getAdvertising = async () => {
    try {
        return await db.advertising.findAll( {
            include: [
                {
                    model: db.images,
                    attributes: ['principal','base64','order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const getIdAdvertising = async (id) => {
    try {
        return await db.advertising.findByPk(id , {
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

const updatePutAdvertising = async (id, data) => {
    try {
        return await db.advertising.update({ ...data }, { where: { id } });
    } catch (e) {
        throw e;
    }
}

const updatePatchAdvertising = async (id,data) => {
    try {
        return await db.advertising.update({ ...data }, { where: { id } });
    } catch (e) {
        throw e;
    }
}

const deleteAdvertising = async (id) => {
    try {
        return await db.advertising.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createAdvertising,
    getAdvertising,
    getIdAdvertising,
    updatePutAdvertising,
    updatePatchAdvertising,
    deleteAdvertising
}