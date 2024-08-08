const express = require('express');
const rAdvertising = express.Router();
const { CreateAdvertisingController, GetIdAdvertisingController, UpdatePutAdvertisingController, UpdatePatchAdvertisingController , DeleteAdvertisingController , GetAdvertisingsController} = require('../controllers');

rAdvertising.get('/', async (req, res) => {
        try {
           return await GetAdvertisingsController(req, res);
        } catch (err) {
            throw err;
        }
    });

rAdvertising.get('/:id', async (req, res) => {
        try {
          return await GetIdAdvertisingController(req, res);
        } catch (err) {
            throw err;
        }
    });

rAdvertising.post('/', async (req, res) => {
        try {
            return await CreateAdvertisingController(req, res);
        } catch (err) {
            throw err;
        }
      });

rAdvertising.put('/:id',async (req, res) => {
        try {
            return await UpdatePutAdvertisingController(req, res);
        } catch (err) {
            throw err;
        }
    });

rAdvertising.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchAdvertisingController(req, res);
    } catch (err) {
        throw err;
    }
});

rAdvertising.delete('/:id', async (req, res) => {
        try {
            return await DeleteAdvertisingController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rAdvertising;