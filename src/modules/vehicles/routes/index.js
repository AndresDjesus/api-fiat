const express = require('express'); 
const rVehicles = express.Router();
const { CreateVehicleController, GetIdVehicleController, UpdatePutVehicleController, UpdatePatchVehicleController , DeleteVehicleController , GetVehiclesController} = require('../controllers');

rVehicles.get('/', async (req, res) => {
        try {
           return await GetVehiclesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rVehicles.get('/:id', async (req, res) => {
        try {
          return await GetIdVehicleController(req, res);
        } catch (err) {
            throw err;
        }
    });

rVehicles.post('/', async (req, res) => {
        try {
            return await CreateVehicleController(req, res);
        } catch (err) {
            throw err;
        }
      });

rVehicles.put('/:id',async (req, res) => {
        try {
            return await UpdatePutVehicleController(req, res);
        } catch (err) {
            throw err;
        }
    });

rVehicles.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchVehicleController(req, res);
    } catch (err) {
        throw err;
    }
});

rVehicles.delete('/:id', async (req, res) => {
        try {
            return await DeleteVehicleController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rVehicles;