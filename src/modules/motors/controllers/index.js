const {validatesSChemaCreateMotor, validatesSChemaGetIdMotor, validatesSChemaUpdatePutMotor, validatesSChemaUpdatePatchMotor, validatesSChemaDeleteMotor} = require('../validators');

const {createMotor, getIdMotor, updatePutMotor, updatePatchMotor, deleteMotor, getMotors} = require('../services');

const CreateMotorController = async (req, res) => {
    try { 
        const { error } = validatesSChemaCreateMotor.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const motor = await createMotor(req.body);
        return res.json(motor);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetIdMotorController = async (req, res) => {
    try {
        const { id } = req.params;
        const motor = await getIdMotor(id);
        return res.json(motor);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePutMotorController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePutMotor.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedMotor = req.body; //datos del motor actualizado
        const motor = await updatePutMotor(id, {...updatedMotor});
        if(motor[0] === 0) {
            return res.status(404).json({ message: 'Motor no encontrada' });
        }
        res.status(200).json({ message: 'Motor actualizada correctamente', data: {...updatedMotor} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const UpdatePatchMotorController = async (req, res) => {
    try {
        const { error } = validatesSChemaUpdatePatchMotor.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedMotor = req.body; //datos del motor actualizado
        const motor = await updatePatchMotor(id, {...updatedMotor});
        if(motor[0] === 0) {
            return res.status(404).json({ message: 'Motor no encontrada' });
        }
        res.status(200).json({ message: 'Motor actualizada correctamente', data: {...updatedMotor} });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteMotorController = async (req, res) => {
    try {
        const { id } = req.params;
        const motor = await deleteMotor(id);
        if(motor[0] === 0) {
            return res.status(404).json({ message: 'Motor no encontrada' });
        }
        res.status(200).json({ message: 'Motor eliminada correctamente' });
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const GetMotorsController = async (req, res) => {
    try {
        const motors = await getMotors();
        return res.json(motors);
    } catch (err) {
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

module.exports = {
    CreateMotorController,
    GetIdMotorController,
    UpdatePutMotorController,
    UpdatePatchMotorController,
    DeleteMotorController,
    GetMotorsController
}