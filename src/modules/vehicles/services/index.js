const db = require('../../../utils/sequelize');

const createVehicle = async (data) => {
    try {
        return await db.vehicles.create(data);
    } catch (e) {
        throw e;
    }
}

const getVehicles = async () => {
    try {
        return await db.vehicles.findAll({
            attributes: ['id', 'name', 'description', 'year', 'price', 'transmission'],
            include: [
                {
                    model: db.motors,
                    as: 'motor',
                    attributes: ['name']
                }, {
                    model: db.categories,
                    as: 'category',
                    attributes: ['name']
                }, 
                {
                    model: db.combustible,
                    as:'combustible',
                    attributes:['ciudad','carretera','description']
                },
                {
                    model: db.design,
                    as:'design',
                    attributes:['title', 'content', 'base64']
                },
                {
                    model: db.inside,
                    as:'inside',
                    attributes:['title', 'content', 'base64']
                },
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
const getIdVehicle = async (id) => {
    try {
        return await db.vehicles.findByPk(id, {
            attributes: ['id', 'name', 'description', 'year', 'price', 'transmission'],
            include: [
                {
                    model: db.motors,
                    as: 'motor',
                    attributes: ['name']
                }, {
                    model: db.categories,
                    as: 'category',
                    attributes: ['name']
                },
                {
                    model: db.combustible,
                    as:'combustible',
                    attributes:['ciudad','carretera','description']
                },
                {
                    model: db.design,
                    as:'design',
                    attributes:['title', 'content', 'base64']
                },
                {
                    model: db.inside,
                    as:'inside',
                    attributes:['title', 'content', 'base64']
                },
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

const updatePutVehicle = async (id, data) => {
    try {
        
        return await db.vehicles.update({ ...data }, { where: { id } });

    } catch (e) {
        throw e;
    }
}

const updatePatchVehicle = async (id, data) => {
    try {
        return await db.vehicles.update({ ...data }, { where: { id } });

    } catch (e) {
        throw e;
    }
}

const deleteVehicle = async (id) => {
    try {
        return await db.vehicles.destroy({ where: { id } });

    } catch (e) {
        throw e;
    }
}
module.exports = {
    createVehicle, getVehicles, getIdVehicle, updatePutVehicle, updatePatchVehicle, deleteVehicle
}