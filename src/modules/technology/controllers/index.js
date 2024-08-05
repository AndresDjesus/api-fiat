const { validatesSChemaCreateTechnology, validatesSChemaUpdatePutTechnology, validatesSChemaUpdatePatchTechnology, validatesSChemaGetTechnology, validatesSChemaDeleteTechnology } = require('../validators');

const { createTechnology, getTechnologys, getIdTechnology, updatePutTechnology, updatePatchTechnology, deleteTechnology } = require('../services');

const CreateTechnologyController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateTechnology.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const technology = await createTechnology(req.body);
        return res.json(technology);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetTechnologysController = async (req, res) => {
    try {
        const technologys = await getTechnologys();
        return res.json(technologys);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdTechnologyController = async (req, res) => { 
    try {
        const { id } = req.params;
        const technology = await getIdTechnology(id);
        return res.json(technology);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutTechnologyController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutTechnology.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTechnology = req.body; //datos de la categoria actualizado
        const technology = await updatePutTechnology(id, {...updatedTechnology});
        if(technology[0] === 0) {
            return res.status(404).json({ message: 'Technology no encontrada' });
        }
        res.status(200).json({ message: 'Technology actualizada correctamente', data: {...updatedTechnology} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchTechnologyController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchTechnology.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedTechnology = req.body;
        const technology = await updatePatchTechnology(id, {...updatedTechnology});
        if(technology[0] === 0) {
            return res.status(404).json({ message: 'Technology no encontrada' });
        }
        res.status(200).json({ message: 'Technology actualizada correctamente', data: { ... updatedTechnology } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteTechnologyController = async (req, res) => {
    try {
        const { id } = req.params;
        const technology = await deleteTechnology(id);
        if(technology[0] === 0) {
            return res.status(404).json({ message: 'Technology no encontrado' });
        }
        res.status(200).json({ message: 'Technology eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateTechnologyController,
    GetTechnologysController,
    GetIdTechnologyController,
    UpdatePutTechnologyController,
    UpdatePatchTechnologyController,
    DeleteTechnologyController
}