const {date} = require('joi');
const db = require('../../../utils/sequelize');


const createFooter = async (data) => {
    try {
        return await db.footer.create(data);
    } catch (e) {
        throw e;
    }
}

const getFooter = async () => {
    try {
        return await db.footer.findAll( {
            include: [
                {
                    model: db.images,
                    attributes: ['principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const getIdFooter = async (id) => {
    try {
        return await db.footer.findByPk(id, {
            include: [
                {
                    model: db.images,
                    attributes: ['principal','base64', 'order']
                }
            ]
        });
    } catch (e) {
        throw e;
    }
}

const updatePutFooter = async (id, data) => {
    try {
        return await db.footer.update(data, {
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}

const updatePatchFooter = async (id, data) => {
    try {
        return await db.footer.update(data, {
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}
const deleteFooter = async (id) => {
    try {
        return await db.footer.destroy({
            where: {
                id
            }
        });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createFooter,
    getFooter,
    getIdFooter,
    updatePutFooter,
    updatePatchFooter,
    deleteFooter
}