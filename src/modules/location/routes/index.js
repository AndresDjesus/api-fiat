const express = require('express');
const rLocation = express.Router();
const { CreateLocationController, GetIdLocationController, UpdatePutLocationController, UpdatePatchLocationController , DeleteLocationController , GetLocationController} = require('../controllers');

rLocation.get('/', async (req, res) => {
        try {
           return await GetLocationController(req, res);
        } catch (err) {
            throw err;
        }
    });

rLocation.get('/:id', async (req, res) => {
        try {
          return await GetIdLocationController(req, res);
        } catch (err) {
            throw err;
        }
    });

rLocation.post('/', async (req, res) => {
        try {
            return await CreateLocationController(req, res);
        } catch (err) {
            throw err;
        }
      });

rLocation.put('/:id',async (req, res) => {
        try {
            return await UpdatePutLocationController(req, res);
        } catch (err) {
            throw err;
        }
    });

rLocation.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchLocationController(req, res);
    } catch (err) {
        throw err;
    }
});

rLocation.delete('/:id', async (req, res) => {
        try {
            return await DeleteLocationController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rLocation;