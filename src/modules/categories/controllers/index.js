const { validatesSChemaCreateCategory, validatesSChemaUpdatePutCategory, validatesSChemaUpdatePatchCategory, validatesSChemaGetCategory, validatesSChemaDeleteCategory } = require('../validators');

const { createCategory, getCategories, getIdCategories, updatePutCategory, updatePatchCategory, deleteCategory } = require('../services');

const CreateCategoryController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateCategory.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const category = await createCategory(req.body);
        return res.json(category);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetCategoriesController = async (req, res) => {
    try {
        const categories = await getCategories();
        return res.json(categories);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdCategoryController = async (req, res) => { 
    try {
        const { id } = req.params;
        const category = await getIdCategories(id);
        return res.json(category);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutCategoryController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutCategory.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCategory = req.body; //datos de la categoria actualizado
        const category = await updatePutCategory(id, {...updatedCategory});
        if(category[0] === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json({ message: 'Categoría actualizada correctamente', data: {...updatedCategory} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchCategoryController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutCategory.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCategory = req.body; //datos de la categoria actualizado
        const category = await updatePatchCategory(id, {...updatedCategory});
        if(category[0] === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json({ message: 'Categoría actualizada correctamente', data: { ... updatedCategory } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await deleteCategory(id);
        if(category[0] === 0) {
            return res.status(404).json({ message: 'Categoría no encontrada' });
        }
        res.status(200).json({ message: 'Categoría eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateCategoryController,
    GetCategoriesController,
    GetIdCategoryController,
    UpdatePutCategoryController,
    UpdatePatchCategoryController,
    DeleteCategoryController
}