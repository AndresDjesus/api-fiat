const { validatesSChemaCreateDesign, validatesSChemaUpdatePutDesign, validatesSChemaUpdatePatchDesign, validatesSChemaGetDesign, validatesSChemaDeleteDesign } = require('../validators');

const { createDesign, getDesigns, getIdDesign, updatePutDesign, updatePatchDesign, deleteDesign } = require('../services');

const CreateDesignController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateDesign.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const design = await createDesign(req.body);
        return res.json(design);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetDesignsController = async (req, res) => {
    try {
        const designs = await getDesigns();
        return res.json(designs);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdDesignController = async (req, res) => { 
    try {
        const { id } = req.params;
        const design = await getIdDesign(id);
        return res.json(design);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutDesignController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutDesign.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedDesign = req.body; //datos de la categoria actualizado
        const design = await updatePutDesign(id, {...updatedDesign});
        if(design[0] === 0) {
            return res.status(404).json({ message: 'Design no encontrado' });
        }
        res.status(200).json({ message: 'Design actualizado correctamente', data: {...updatedDesign} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchDesignController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutDesign.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedDesign = req.body;
        const design = await updatePatchDesign(id, {...updatedDesign});
        if(design[0] === 0) {
            return res.status(404).json({ message: 'Design no encontrado' });
        }
        res.status(200).json({ message: 'Design actualizado correctamente', data: { ... updatedDesign } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteDesignController = async (req, res) => {
    try {
        const { id } = req.params;
        const design = await deleteDesign(id);
        if(design[0] === 0) {
            return res.status(404).json({ message: 'Design no encontrado' });
        }
        res.status(200).json({ message: 'Design eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateDesignController,
    GetDesignsController,
    GetIdDesignController,
    UpdatePutDesignController,
    UpdatePatchDesignController,
    DeleteDesignController
}