const {validatesSChemaGetAllBlog, validatesSChemaGetOneBlog, validatesSChemaCreateBlog, validatesSChemaUpdatePutBlog, validatesSChemaUpdatePatchBlog} = require('../validators');

const {getBlog, getIdBlog, createBlog, updatePutBlog, updatePatchBlog, deleteBlog} = require('../services');

const GetBlogController = async (req, res) => {
    try {
        const blog = await getBlog();
        return res.json(blog);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await getIdBlog(id);
        return res.json(blog);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const CreateBlogController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateBlog.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const blog = await createBlog(req.body);
        return res.json(blog);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutBlogController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutBlog.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedBlog = req.body; //datos de la categoria actualizado
        const blog = await updatePutBlog(id, {...updatedBlog});
        if(blog[0] === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json({ message: 'Blog actualizado correctamente', data: {...updatedBlog} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}   

const UpdatePatchBlogController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchBlog.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedBlog = req.body; //datos de la categoria actualizado
        const blog = await updatePatchBlog(id, {...updatedBlog});
        if(blog[0] === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json({ message: 'Blog actualizado correctamente', data: {...updatedBlog} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await deleteBlog(id);
        if(blog[0] === 0) {
            return res.status(404).json({ message: 'Blog no encontrado' });
        }
        res.status(200).json({ message: 'Blog eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    GetBlogController,
    GetIdBlogController,
    CreateBlogController,
    UpdatePutBlogController,
    UpdatePatchBlogController,
    DeleteBlogController
}