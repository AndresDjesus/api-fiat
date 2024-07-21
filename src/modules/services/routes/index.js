const express = require('express');
const rServices = express.Router();
const { CreateServiceController, GetIdServiceController, UpdatePutServiceController, UpdatePatchServiceController , DeleteServiceController , GetServicesController} = require('../controllers');

rServices.get('/', async (req, res) => {
        try {
           return await GetServicesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rServices.get('/:id', async (req, res) => {
        try {
          return await GetIdServiceController(req, res);
        } catch (err) {
            throw err;
        }
    });

rServices.post('/', async (req, res) => {
        try {
            return await CreateServiceController(req, res);
        } catch (err) {
            throw err;
        }
      });

rServices.put('/:id',async (req, res) => {
        try {
            return await UpdatePutServiceController(req, res);
        } catch (err) {
            throw err;
        }
    });

rServices.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchServiceController(req, res);
    } catch (err) {
        throw err;
    }
});

rServices.delete('/:id', async (req, res) => {
        try {
            return await DeleteServiceController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rServices;