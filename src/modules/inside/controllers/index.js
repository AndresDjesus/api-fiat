const { validatesSChemaCreateInside, validatesSChemaUpdatePutInside, validatesSChemaUpdatePatchInside, validatesSChemaGetInsides, validatesSChemaDeleteInside } = require('../validators');

const { createInside, getInsides, getIdInside, updatePutInside, updatePatchInside, deleteInside } = require('../services');

const CreateInsideController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateInside.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const inside = await createInside(req.body);
        return res.json(inside);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetInsidesController = async (req, res) => {
    try {
        const insides = await getInsides();
        return res.json(insides);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdInsideController = async (req, res) => { 
    try {
        const { id } = req.params;
        const inside = await getIdInside(id);
        return res.json(inside);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutInsideController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutInside.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedInside = req.body; //datos del inside actualizado
        const inside = await updatePutInside(id, {...updatedInside});
        if(inside[0] === 0) {
            return res.status(404).json({ message: 'Inside no encontrado' });
        }
        res.status(200).json({ message: 'Inside actualizado correctamente', data: {...updatedInside} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchInsideController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutInside.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedInside = req.body;
        const inside = await updatePatchInside(id, {...updatedInside});
        if(inside[0] === 0) {
            return res.status(404).json({ message: 'Inside no encontrado' });
        }
        res.status(200).json({ message: 'Inside actualizado correctamente', data: { ... updatedInside } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }   
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteInsideController = async (req, res) => {
    try {
        const { id } = req.params;
        const inside = await deleteInside(id);
        if(inside[0] === 0) {
            return res.status(404).json({ message: 'Inside no encontrado' });
        }
        res.status(200).json({ message: 'Inside eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateInsideController,
    GetInsidesController,
    GetIdInsideController,
    UpdatePutInsideController,
    UpdatePatchInsideController,
    DeleteInsideController
}