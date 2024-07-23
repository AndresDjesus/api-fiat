const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createCompanyProfile = async (data) => {
    try {
        return await db.companyProfiles.create(data);
    } catch (e) {
        throw e;
    }
}

const getCompanyProfile = async () => {
    try {
        return await db.companyProfiles.findAll();
    } catch (e) {
        throw e;
    }
}

const updatePutCompanyProfile = async (id, data) => {
    try {
        return await db.companyProfiles.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchCompanyProfile = async (id,data) => {
    try {
        return await db.companyProfiles.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteCompanyProfile = async (id) => {
    try {
        return await db.companyProfiles.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createCompanyProfile, getCompanyProfile, updatePutCompanyProfile, updatePatchCompanyProfile, deleteCompanyProfile
}