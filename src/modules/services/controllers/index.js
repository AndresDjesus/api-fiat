const {validatesSChemaCreateService, validatesSChemaUpdatePutService, validatesSChemaUpdatePatchService, validatesSChemaGetService, validatesSChemaDeleteService} = require('../validators');

const {createService, getServices, getIdService , updatePutService, updatePatchService, deleteService} = require('../services');

const CreateServiceController = async (req, res) => {
    try {
        const { error } = validatesSChemaCreateService.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const service = await createService(req.body);
        return res.json(service);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetServicesController = async (req, res) => {
    try{
        const service = await getServices();
        res.json(service);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los servicios' });
    }
}

const GetIdServiceController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetService.validate ({ id: req.params.id });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const service = await getIdService(id);         

        if (!service) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }

        res.json(service);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al obtener el servicio' });
    }
}

const UpdatePutServiceController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutService.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const service = await updatePutService(id, req.body);
        res.status(200).json({ message: 'Servicio actualizado correctamente', data: {...req.body } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al actualizar el servicio' });
    }
}

const UpdatePatchServiceController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchService.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const service = await updatePatchService(id, req.body);
        res.status(200).json({ message: 'Servicio actualizado correctamente', data: {...req.body } });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al actualizar el servicio' });
    }
}

const DeleteServiceController = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await deleteService(id);
        res.status(200).json({ message: 'Servicio eliminado correctamente' });
    } catch (err) {
        console.log(err);
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al eliminar el servicio' });
    }
}

module.exports = {
    CreateServiceController,
    GetServicesController,
    GetIdServiceController,
    UpdatePutServiceController,
    UpdatePatchServiceController,
    DeleteServiceController
}