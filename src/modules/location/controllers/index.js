const {validatesSChemaCreateLocation, validatesSChemaUpdatePutLocation, validatesSChemaUpdatePatchLocation, validatesSChemaGetLocation, validatesSChemaDeleteLocation, validatesSChemaGetIdLocation} = require('../validators');

const {createLocation, getIdLocation, updatePutLocation, updatePatchLocation, deleteLocation, getLocations} = require('../services');


const GetLocationController = async (req, res) => {
    try {
        const location = await getLocations();
        return res.json(location);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}
const CreateLocationController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateLocation.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const location = await createLocation(req.body);
        return res.json(location);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdLocationController = async (req, res) => { 
    try {
        const { id } = req.params;
        const location = await getIdLocation(id);
        return res.json(location);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutLocationController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutLocation.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedLocation = req.body; //datos de la categoria actualizado
        const location = await updatePutLocation(id, {...updatedLocation});
        if(location[0] === 0) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json({ message: 'Ubicación actualizada correctamente', data: {...updatedLocation} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchLocationController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchLocation.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedLocation = req.body; //datos de la categoria actualizado
        const location = await updatePatchLocation(id, {...updatedLocation});
        if(location[0] === 0) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json({ message: 'Ubicación actualizada correctamente', data: {...updatedLocation} });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {

            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteLocationController = async (req, res) => {
    try {
        const { id } = req.params;
        const location = await deleteLocation(id);
        if(location[0] === 0) {
            return res.status(404).json({ message: 'Ubicación no encontrada' });
        }
        res.status(200).json({ message: 'Ubicación eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    GetLocationController,
    CreateLocationController,
    GetIdLocationController,
    UpdatePutLocationController,
    UpdatePatchLocationController,
    DeleteLocationController
}