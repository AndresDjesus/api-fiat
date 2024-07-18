const {data} = require('joi');
const db = require('../../../utils/sequelize');


const createImage = async (data) => {
    try {
        return await db.images.create(data);
    } catch (e) {
        throw e;
    }
}   

const getImages = async () => {
    try {
        return await db.images.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdImage = async (id) => {
    try {
        return await db.images.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutImage = async (id, data) => {
    try {
        return await db.images.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchImage = async (id,data) => {
    try {
        return await db.images.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteImage = async (id) => {
    try {
        return await db.images.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createImage, getImages, getIdImage, updatePutImage, updatePatchImage, deleteImage
}