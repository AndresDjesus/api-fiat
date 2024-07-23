const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createCompany = async (data) => {
    try {
        return await db.company.create(data);
    } catch (e) {
        throw e;
    }
}

const getCompany = async () => {
    try {
        return await db.company.findAll({
            include: [
                {
                    model: db.companyProfile,
                    as: 'CompanyProfiles',
                    attributes: ['mission','vision','history','active']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const getIdCompany = async (id) => {
    try {
        return await db.company.findByPk(id, {
            include: [
                {
                    model: db.companyProfile,
                    as: 'CompanyProfiles',
                    attributes: ['mission','vision','history','active']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}
const updatePutCompany = async (id, data) => {
    try {
        return await db.company.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchCompany = async (id,data) => {
    try {
        return await db.company.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteCompany = async (id) => {
    try {
        return await db.company.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createCompany, getCompany, updatePutCompany, updatePatchCompany, deleteCompany, getIdCompany
}