const {validatesSChemaCreateFooter, validatesSChemaUpdatePutFooter, validatesSChemaUpdatePatchFooter, validatesSChemaGetFooter, validatesSChemaDeleteFooter} = require('../validators');

const {createFooter, getFooter, getIdFooter, updatePutFooter, updatePatchFooter, deleteFooter} = require('../services');

const GetFooterController = async (req, res) => {
    try {
        const footer = await getFooter();
        return res.json(footer);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdFooterController = async (req, res) => {
    try {
        const { id } = req.params;
        const footer = await getIdFooter(id);
        return res.json(footer);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const CreateFooterController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateFooter.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const footer = await createFooter(req.body);
        return res.json(footer);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutFooterController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutFooter.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedFooter = req.body; //datos de la categoria actualizado
        const footer = await updatePutFooter(id, {...updatedFooter});
        if(footer[0] === 0) {
            return res.status(404).json({ message: 'Footer no encontrado' });
        }
        res.status(200).json({ message: 'Footer actualizado correctamente', data: {...updatedFooter} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchFooterController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchFooter.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedFooter = req.body; //datos de la categoria actualizado
        const footer = await updatePatchFooter(id, {...updatedFooter});
        if(footer[0] === 0) {
            return res.status(404).json({ message: 'Footer no encontrado' });
        }
        res.status(200).json({ message: 'Footer actualizado correctamente', data: {...updatedFooter} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteFooterController = async (req, res) => {
    try {
        const { error } = validatesSChemaDeleteFooter.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const footer = await deleteFooter(id);
        if(footer[0] === 0) {
            return res.status(404).json({ message: 'Footer no encontrado' });
        }
        res.status(200).json({ message: 'Footer eliminado correctamente' });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    GetFooterController,
    GetIdFooterController,
    CreateFooterController,
    UpdatePutFooterController,
    UpdatePatchFooterController,
    DeleteFooterController
}