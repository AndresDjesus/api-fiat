const {validatesSChemaCreateAdvertising, validatesSChemaUpdatePutAdvertising, validatesSChemaUpdatePatchAdvertising} = require('../validators');
const {createAdvertising, getAdvertising, getIdAdvertising, updatePutAdvertising, updatePatchAdvertising, deleteAdvertising} = require('../services');

const GetAdvertisingsController = async (req, res) => {
    try {
        const advertising = await getAdvertising();
        return res.json(advertising);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdAdvertisingController = async (req, res) => {
    try {
        const { id } = req.params;
        const advertising = await getIdAdvertising(id);
        return res.json(advertising);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const CreateAdvertisingController = async (req, res) => {
    try {
        const { error } = validatesSChemaCreateAdvertising.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const advertising = await createAdvertising(req.body);
        return res.json(advertising);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutAdvertisingController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutAdvertising.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;      
        const updatedAdvertising = req.body; //datos de la advertising actualizado
        const advertising = await updatePutAdvertising(id, {...updatedAdvertising});
        if(advertising[0] === 0) {
            return res.status(404).json({ message: 'Advertising no encontrado' });
        }
        res.status(200).json({ message: 'Advertising actualizado correctamente', data: {...updatedAdvertising} });                  
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchAdvertisingController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchAdvertising.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedAdvertising = req.body; //datos de la advertising actualizado
        const advertising = await updatePatchAdvertising(id, {...updatedAdvertising});
        if(advertising[0] === 0) {
            return res.status(404).json({ message: 'Advertising no encontrado' });
        }
        res.status(200).json({ message: 'Advertising actualizado correctamente', data: {...updatedAdvertising} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteAdvertisingController = async (req, res) => {
    try {
        const { id } = req.params;
        const advertising = await deleteAdvertising(id);
        if(advertising[0] === 0) {
            return res.status(404).json({ message: 'Advertising no encontrado' });
        }
        res.status(200).json({ message: 'Advertising eliminado correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    GetAdvertisingsController,
    GetIdAdvertisingController,
    CreateAdvertisingController,
    UpdatePutAdvertisingController,
    UpdatePatchAdvertisingController,
    DeleteAdvertisingController
}