const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createCompanyProfile = async (data) => {
    try {
        return await db.companyProfile.create(data);
    } catch (e) {
        throw e;
    }
}

const getCompanyProfile = async () => {
    try {
        return await db.companyProfile.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdCompanyProfile = async (id) => {
    try {
        return await db.companyProfile.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutCompanyProfile = async (id, data) => {
    try {
        return await db.companyProfile.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchCompanyProfile = async (id,data) => {
    try {
        return await db.companyProfile.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteCompanyProfile = async (id) => {
    try {
        return await db.companyProfile.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createCompanyProfile, getCompanyProfile, updatePutCompanyProfile, updatePatchCompanyProfile, deleteCompanyProfile, getIdCompanyProfile
}