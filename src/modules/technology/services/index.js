const { date } = require('joi');
const db = require('../../../utils/sequelize');


const createTechnology = async (data) => {
    try {
        return await db.technology.create(data);
    } catch (e) {
        throw e;
    }
}

const getTechnologys  = async () => {
    try {
        return await db.technology.findAll();
    } catch (e) {
        throw e;
    }
}
const getIdTechnology  = async (id) => {
    try {
        return await db.technology.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutTechnology  = async (id, data) => {
    try {
        return await db.technology.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchTechnology  = async (id,data) => {
    try {
        return await db.technology .update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteTechnology  = async (id) => {
    try {
        return await db.technology.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createTechnology , getTechnologys, getIdTechnology , updatePutTechnology , updatePatchTechnology , deleteTechnology 
}   