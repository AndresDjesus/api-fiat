const { date } = require('joi');
const db = require('../../../utils/sequelize');


const createDesign = async (data) => {
    try {
        return await db.design.create(data);
    } catch (e) {
        throw e;
    }
}

const getDesigns = async () => {
    try {
        return await db.design.findAll({
            include : [
                {
                    model: db.images,
                    attributes: ['principal','base64']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}
const getIdDesign = async (id) => {
    try {
        return await db.design.findByPk(id , {
            include: [
                {
                    model: db.images,
                    attributes: ['principal', 'base64']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutDesign = async (id, data) => {
    try {
        return await db.design.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchDesign = async (id,data) => {
    try {
        return await db.design.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteDesign = async (id) => {
    try {
        return await db.design.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}
module.exports = {
    createDesign, getDesigns, getIdDesign, updatePutDesign, updatePatchDesign, deleteDesign
}   