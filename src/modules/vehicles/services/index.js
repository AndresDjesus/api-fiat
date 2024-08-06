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
            attributes: ['id', 'name', 'description', 'year', 'price', 'transmission','screen'],
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
                    as: 'combustible',
                    attributes: ['carretera','ciudad','description']
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
            attributes: ['id', 'name', 'description', 'year', 'price', 'transmission','screen'],
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
                    as: 'combustible',
                    attributes: ['carretera','ciudad','description']
                },
                {
                    model : db.inside,
                    as: 'inside',
                    attributes: ['title','content'],
                    include: [
                        {
                            model: db.images,
                            attributes: ['principal','base64']
                        }
                    ]
                },
                {
                    model : db.design,
                    as: 'design',
                    attributes: ['title','content'],
                    include: [
                        {
                            model: db.images,
                            attributes: ['principal','base64']
                        }
                    ]
                },
                {
                    model : db.technology,
                    as: 'technology',
                    attributes: ['title','content'],
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