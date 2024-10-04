const {validatesSChemaCreateResource, validatesSChemaUpdatePutResource, validatesSChemaUpdatePatchResource, validatesSChemaGetResource, validatesSChemaDeleteResource} = require('../validators');
const {createResource, getResource, getIdResource, updatePutResource, updatePatchResource, deleteResource} = require('../services');

const CreateResourceController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateResource.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const resource = await createResource(req.body);
        return res.json(resource);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetResourcesController = async (req, res) => {
    try {
        const resource = await getResource();
        return res.json(resource);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};  

const GetIdResourceController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetResource.validate ({ id: req.params.id });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const resource = await getIdResource(id); 

        if (! resource) {
            return res.status(404).json({ message: 'Recurso no encontrado' });
        }
        res.json(resource);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al obtener el recurso' });
    }
}

const UpdateResourcePutController = async (req, res) => {
    try {

        const { error } = validatesSChemaUpdatePutResource.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedResource = req.body; 

        const resource = await updatePutResource(id, {...updatedResource});

        if(resource[0] === 0) {
            return res.status(404).json({ message: 'Recurso no encontrado' });
        }

        res.status(200).json({ message: 'Recurso actualizado correctamente', data: { ... updatedResource } });
    } catch (err) {
        console.log(err);
        console.log(err);
        return res.status(500).send({ message: err.message, stack: err.stack });
    }

}

const UpdateResourcePatchController = async (req, res) => {
    
    try {  const { error } = validatesSChemaUpdatePatchResource.validate({ ...req.body }, { abortEarly: false });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;
    const updatedResource = req.body; 

    const resource = await updatePatchResource(id, {...updatedResource});

    if(resource[0] === 0) {
        return res.status(404).json({ message: 'Recurso no encontrado' });
    }

    res.status(200).json({ message: 'Recurso actualizado correctamente', data: { ... updatedResource } });
    } catch (err) {
    if(err.status === 400) {
        return res.status(err.status).send({ message: err.message, stack: err.stack });
    }
    return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteResourceController = async (req, res) => {
    try {          
    const { error } = validatesSChemaDeleteResource.validate({ id: req.params.id });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;

    const deletedRows = await deleteResource(id);

    if (deletedRows === 0) {
        return res.status(404).json({ message: 'Recurso no encontrado' });
    }

    return res.json({ message: 'Recurso eliminado correctamente' });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateResourceController,
    GetResourcesController,
    GetIdResourceController,
    UpdateResourcePutController,
    UpdateResourcePatchController,
    DeleteResourceController
}