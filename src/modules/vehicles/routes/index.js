const express = require('express'); 
const rVehicles = express.Router();
const db = require('../../../utils/sequelize');
const { validatesSChemaCreateVehicle } = require('../validators');

rVehicles.get('/', (req, res) => {
    res.send('Hello World! from Vehicles')
});

rVehicles.get('/:id', (req, res) => {
    res.send(`Hello World! from Vehicles - ${req.params.id}`)
});

rVehicles.post('/', async (req, res) => {
        try {
            const { error } = validatesSChemaCreateVehicle.validate({ ...req.body }, { abortEarly: false });
            if(error) {
                const e = new Error();
                e.status = 400;
                e.message = error.details.map((err) => err.message).join(', ');
                throw e;
            }
            const vehicle = await db.vehicles.create({ ...req.body });
            return res.json(vehicle);
        } catch (error) {
            if(error.status === 400) {
                return res.status(error.status).send({ message: error.message, stack: error.stack });
            }
            return res.status(500).send({ message: error.message, stack: error.stack });

        }
      });

rVehicles.put('/:id', (req, res) => {
    res.send('Hello World! from Vehicles - PUT' + req.params.id)
});

rVehicles.patch('/:id', (req, res) => {
    res.send('Hello World! from Vehicles - PATCH' + req.params.id)
});

module.exports = rVehicles;