const { date } = require('joi');
const db = require('../../../utils/sequelize');


const createInside = async (data) => {
    try {
        return await db.inside.create(data);
    } catch (e) {
        throw e;
    }
}

const getInsides = async () => {
    try {
        return await db.inside.findAll({
            include : [
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
const getIdInside = async (id) => {
    try {
        return await db.inside.findByPk(id , {
            include: [
                {
                    model: db.images,
                    attributes: ['id','principal', 'base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutInside = async (id, data) => {
    try {
        return await db.inside.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchInside = async (id,data) => {
    try {
        return await db.inside.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteInside = async (id) => {
    try {
        return await db.inside.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createInside, getInsides, getIdInside, updatePutInside, updatePatchInside, deleteInside
}   