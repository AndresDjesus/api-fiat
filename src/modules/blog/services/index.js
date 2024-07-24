const {date} = require('joi');
const db = require('../../../utils/sequelize');

const createBlog = async (data) => {
    try {
        return await db.blog.create(data);
    } catch (e) {
        throw e;
    }
}

const getBlog = async () => {
    try {
        return await db.blog.findAll({
            include: [
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

const getIdBlog = async (id) => {
    try {
        return await db.blog.findByPk(id, {
            include: [
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

const updatePutBlog = async (id, data) => {
    try {
        return await db.blog.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const updatePatchBlog = async (id,data) => {
    try {
        return await db.blog.update({ ...data }, { where: { id } });    
    } catch (e) {
        throw e;
    }
}

const deleteBlog = async (id) => {
    try {
        return await db.blog.destroy({ where: { id } });
    } catch (e) {
        throw e;
    }
}

module.exports = {
    createBlog,
    getBlog,
    getIdBlog,
    updatePutBlog,
    updatePatchBlog,
    deleteBlog
}