const { validatesSChemaCreateUser, validatesSChemaUpdatePutUser, validatesSChemaUpdatePatchUser, validatesSChemaGetUser } = require('../validators');

const { createUser, getUser, getIdUser, updateUserPut, updateUserPatch, deleteUser } = require('../services');

const user = require('../../../models/user');

const createUserController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateUser.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const motor = await createUser(req.body);
        return res.json(motor);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const getUsersController = async (req, res) => {
    try {
        const users = await getUser();
        return res.json(users);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};  

const getIdUserController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetUser.validate ({ id: req.params.id });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const user = await getIdUser(id); 

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(user);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al obtener el usuario' });
    }
}

const updateUserPutController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutUser(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const user = await updateUserPut(id, req.body);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const updateUserPatchController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchUser(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const user = await updateUserPatch(id, req.body);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetUser.validate({ id: req.params.id });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const { id } = req.params;
        const user = await deleteUser(id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createUserController,
    getUsersController,
    getIdUserController,
    updateUserPutController,
    updateUserPatchController,
    deleteUserController
}
