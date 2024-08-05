const {validatesSChemaCreateCombustible, validatesSChemaGetIdCombustible, validatesSChemaUpdatePutCombustible, validatesSChemaUpdatePatchCombustible, validatesSChemaDeleteCombustible} = require('../validators');

const {createCombustible, getIdCombstible, updatePutCombustible, updatePatchCombustible, deleteCombustible, getCombustibles} = require('../services');

const CreateCombustibleController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateCombustible.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const combustible = await createCombustible(req.body);
        return res.json(combustible);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdCombustibleController = async (req, res) => {
    try {
        const { id } = req.params;
        const combustible = await getIdCombstible(id);
        return res.json(combustible);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutCombustibleController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutCombustible.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCombustible = req.body; //datos del motor actualizado
        const combustible = await updatePutCombustible(id, {...updatedCombustible});
        if(combustible[0] === 0) {
            return res.status(404).json({ message: 'Combustible no encontrada' });
        }
        res.status(200).json({ message: 'Combustible actualizado correctamente', data: {...updatedCombustible} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchCombustibleController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchCombustible.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedCombustible = req.body; //datos del motor actualizado
        const combustible = await updatePatchCombustible(id, {...updatedCombustible});
        if(combustible[0] === 0) {
            return res.status(404).json({ message: 'Combustible no encontrada' });
        }
        res.status(200).json({ message: 'Combustible actualizado correctamente', data: {...updatedCombustible} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteCombustibleController = async (req, res) => {
    try {
        const { id } = req.params;
        const combustible = await deleteCombustible(id);
        if(combustible[0] === 0) {
            return res.status(404).json({ message: 'Combustible no encontrado' });
        }
        res.status(200).json({ message: 'Combustible eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetCombustiblesController = async (req, res) => {
    try {
        const combustibles = await getCombustibles();
        return res.json(combustibles);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateCombustibleController,
    GetIdCombustibleController,
    UpdatePutCombustibleController,
    UpdatePatchCombustibleController,
    DeleteCombustibleController,
    GetCombustiblesController
}