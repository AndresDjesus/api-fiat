const express = require('express');
const rTechnology = express.Router();
const { CreateTechnologyController, GetIdTechnologyController, UpdatePutTechnologyController, UpdatePatchTechnologyController , DeleteTechnologyController , GetTechnologysController} = require('../controllers');

rTechnology.get('/', async (req, res) => {
        try {
           return await GetTechnologysController(req, res);
        } catch (err) {
            throw err;
        }
    });

rTechnology.get('/:id', async (req, res) => {
        try {
          return await GetIdTechnologyController(req, res);
        } catch (err) {
            throw err;
        }
    });

rTechnology.post('/', async (req, res) => {
        try {
            return await CreateTechnologyController(req, res);
        } catch (err) {
            throw err;
        }
      });

rTechnology.put('/:id',async (req, res) => {
        try {
            return await UpdatePutTechnologyController(req, res);
        } catch (err) {
            throw err;
        }
    }); 

rTechnology.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchTechnologyController(req, res);
    } catch (err) {
        throw err;
    }
});

rTechnology.delete('/:id', async (req, res) => {
        try {
            return await DeleteTechnologyController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rTechnology;