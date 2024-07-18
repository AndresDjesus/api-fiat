const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createMotor = async (data) => {
    try {
        return await db.motors.create(data);
    } catch (e) {
        throw e;
    }
}

const getMotors = async () => {
    try {
        return await db.motors.findAll();
    } catch (e) {
        throw e;
    }
}

const getIdMotor = async (id) => {
    try {
        return await db.motors.findByPk(id);
    } catch (e) {
        throw e;
    }
}

const updatePutMotor = async (id, data) => {
    try {
        return await db.motors.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}   
const updatePatchMotor = async (id,data) => {
    try {
        return await db.motors.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}                          
const deleteMotor = async (id) => {
    try {
        return await db.motors.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}   
module.exports = {
    createMotor, getMotors, getIdMotor, updatePutMotor, updatePatchMotor, deleteMotor
}