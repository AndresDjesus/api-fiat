const { date } = require('joi');
const db = require('../../../utils/sequelize');

const createCategory = async (data) => {
    try {
        return await db.categories.create(data);
    } catch (e) {
        throw e;
    }
}

const getCategories = async () => {
    try {
        return await db.categories.findAll();
    } catch (e) {
        throw e;
    }
}
const getIdCategories = async (id) => {
    try {
        return await db.categories.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutCategory = async (id, data) => {
    try {
        return await db.categories.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchCategory = async (id,data) => {
    try {
        return await db.categories.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteCategory = async (id) => {
    try {
        return await db.categories.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createCategory, getCategories, getIdCategories, updatePutCategory, updatePatchCategory, deleteCategory
}   