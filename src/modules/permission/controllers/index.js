const {validatesSChemaGetPermission, validatesSChemaCreatePermission, validatesSChemaDeletePermission, validatesSChemaUpdatePatchPermission, validatesSChemaUpdatePutPermission} = require('../validators');

const {getPermissions, createPermission, updatePermission, deletePermission, getIdPermission, updatePutPermission, updatePatchPermission} = require('../services');

const createPermissionController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreatePermission.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const permission = await createPermission(req.body);
        return res.json(permission);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const getPermissionController = async (req, res) => {
    try {
        const permission = await getPermissions();
        return res.json(permission);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};  

const getIdPermissionController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetPermission.validate ({ id: req.params.id });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const permission = await getIdPermission(id); 

        if (! permission) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }

        res.json(permission);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al obtener el permiso' });
    }
}

const updatePermissionPutController = async (req, res) => {
    try {

        const { error } = validatesSChemaUpdatePutPermission.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedPermission = req.body; 

        const permission = await updatePutPermission(id, {...updatedPermission});

        if(permission[0] === 0) {
            return res.status(404).json({ message: 'Permiso no encontrado' });
        }

        res.status(200).json({ message: 'Permiso actualizado correctamente', data: { ... updatedPermission } });
    } catch (err) {
        console.log(err);
        console.log(err);
        return res.status(500).send({ message: err.message, stack: err.stack });
    }

}

const updatePermissionPatchController = async (req, res) => {
    
    try {  const { error } = validatesSChemaUpdatePatchPermission.validate({ ...req.body }, { abortEarly: false });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;
    const updatedPermission = req.body; 

    const permission = await updatePatchPermission(id, {...updatedPermission});

    if(permission[0] === 0) {
        return res.status(404).json({ message: 'Permiso no encontrado' });
    }

    res.status(200).json({ message: 'Permiso actualizado correctamente', data: { ... updatedPermission } });
    } catch (err) {
    if(err.status === 400) {
        return res.status(err.status).send({ message: err.message, stack: err.stack });
    }
    return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const deletePermissionController = async (req, res) => {
    try {          
    const { error } = validatesSChemaDeletePermission.validate({ id: req.params.id });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;

    const deletedRows = await deletePermission(id);

    if (deletedRows === 0) {
        return res.status(404).json({ message: 'Permiso no encontrado' });
    }

    return res.json({ message: 'Permiso eliminado correctamente' });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    createPermissionController,
    getPermissionController,
    getIdPermissionController,
    updatePermissionPutController,
    updatePermissionPatchController,
    deletePermissionController
}