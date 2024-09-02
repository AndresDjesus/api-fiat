const { validatesSChemaCreateVehicle } = require('../validators');
const { validatesSChemaUpdatePutVehicle } = require('../validators');
const { validatesSChemaUpdatePatchVehicle } = require('../validators');
const { validatesSChemaGetVehicle } = require('../validators');
const { validatesSChemaDeleteVehicle } = require('../validators');

const {createVehicle, getVehicles, getIdVehicle , updatePutVehicle, updatePatchVehicle, deleteVehicle} = require('../services');
const vehicles = require('../../../models/vehicles');

const CreateVehicleController = async (req, res) => {
    try {
        const { error } = validatesSChemaCreateVehicle.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const vehicle = await createVehicle(req.body);
        return res.json(vehicle);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });

    }

    }

const GetVehiclesController = async (req, res) => {
    try{
        const vehicle = await getVehicles();
        res.json(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los vehículos' });
    }
}

const GetIdVehicleController = async (req, res) => {
    try {
        const { error } = validatesSChemaGetVehicle.validate ({ id: req.params.id });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const vehicle = await getIdVehicle(id); 

        if (!vehicle) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.json(vehicle);
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        res.status(500).json({ message: 'Error al obtener el vehículo' });
    }
}

const UpdatePutVehicleController = async (req, res) => {
    try {

        const { error } = validatesSChemaUpdatePutVehicle.validate({ ...req.body }, { abortEarly: false });
        if(error) {
            const e = new Error();
            e.status = 400;
            e.message = error.details.map((err) => err.message).join(', ');
            throw e;
        }
        const { id } = req.params;
        const updatedVehicle = req.body; // Datos del vehículo actualizado

        const vehicle = await updatePutVehicle(id, {...updatedVehicle});

        if(vehicle[0] === 0) {
            return res.status(404).json({ message: 'Vehículo no encontrado' });
        }

        res.status(200).json({ message: 'Vehículo actualizado correctamente', data: { ... updatedVehicle } });
    } catch (err) {
        console.log(err);
        console.log(err);
        return res.status(500).send({ message: err.message, stack: err.stack });
    }

}

const UpdatePatchVehicleController = async (req, res) => {
    
    try {  const { error } = validatesSChemaUpdatePatchVehicle.validate({ ...req.body }, { abortEarly: false });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;
    const updatedVehicle = req.body; // Datos del vehículo actualizado

    const vehicle = await updatePatchVehicle(id, {...updatedVehicle});

    if(vehicle[0] === 0) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
    }

    res.status(200).json({ message: 'Vehículo actualizado correctamente', data: { ... updatedVehicle } });
    } catch (err) {
    if(err.status === 400) {
        return res.status(err.status).send({ message: err.message, stack: err.stack });
    }
    return res.status(500).send({ message: err.message, stack: err.stack });
    }
}

const DeleteVehicleController = async (req, res) => {
    try {          const { error } = validatesSChemaDeleteVehicle.validate({ id: req.params.id });
    if(error) {
        const e = new Error();
        e.status = 400;
        e.message = error.details.map((err) => err.message).join(', ');
        throw e;
    }
    const { id } = req.params;

    const deletedRows = await deleteVehicle(id);

    if (deletedRows === 0) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
    }

    return res.json({ message: 'Vehículo eliminado correctamente' });
    } catch (err) {
        if(err.status === 400) {
            return res.status(err.status).send({ message: err.message, stack: err.stack });
        }
        return res.status(500).send({ message: err.message, stack: err.stack });
    }
}
        

module.exports = {
CreateVehicleController,
GetVehiclesController,
GetIdVehicleController, 
UpdatePutVehicleController,
UpdatePatchVehicleController,
DeleteVehicleController
};