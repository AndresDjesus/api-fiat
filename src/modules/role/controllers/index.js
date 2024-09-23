const {validatesSChemaCreateRoles, validatesSChemaGetRole, validatesSChemaGetIdRole, validatesSChemaUpdatePutRole, validatesSChemaUpdatePatchRole, validatesSChemaDeleteRole} = require('../validators');

const {createRole, getRoles, getIdRole, updatePutRole, updatePatchRole, deleteRole} = require('../services');

const createRoleController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateRoles.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const motor = await createRole(req.body);
        return res.json(motor);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const getRolesController = async (req, res) => {
    try {
        const roles = await getRoles();
        return res.status(200).json({ roles });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getIdRoleController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetRole.validate({ id: req.params.id });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const role = await getIdRole(id);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        return res.status(200).json({ role });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updatePutRoleController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutRole(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const role = await updatePutRole(id, req.body);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        return res.status(200).json({ role });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const updatePatchRoleController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchRole(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const role = await updatePatchRole(id, req.body);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        return res.status(200).json({ role });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deleteRoleController = async (req, res) => {
    try {
        const { error } = validatesSChemaDeleteRole.validate({ id: req.params.id });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const role = await deleteRole(id);
        if (!role) {
            return res.status(404).json({ error: 'Role not found' });
        }
        return res.status(200).json({ role });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createRoleController,
    getRolesController,
    getIdRoleController,
    updatePutRoleController,
    updatePatchRoleController,
    deleteRoleController
}