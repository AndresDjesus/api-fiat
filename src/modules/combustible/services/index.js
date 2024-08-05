const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createCombustible = async (data) => {
    try {
        return await db.combustible.create(data);
    } catch (e) {
        throw e;
    }
}

const getCombustibles = async () => {
    try {
        return await db.combustible.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdCombstible = async (id) => {
    try {
        return await db.combustible.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutCombustible = async (id, data) => {
    try {
        return await db.combustible.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchCombustible = async (id,data) => {
    try {
        return await db.combustible.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteCombustible = async (id) => {
    try {
        return await db.combustible.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createCombustible, getCombustibles, getIdCombstible, updatePutCombustible, updatePatchCombustible, deleteCombustible
}