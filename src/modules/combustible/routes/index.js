const express = require('express');
const rCombustible = express.Router();
const {CreateCombustibleController, GetIdCombustibleController, UpdatePutCombustibleController, UpdatePatchCombustibleController, DeleteCombustibleController , GetCombustiblesController} = require('../controllers');

rCombustible.get('/', async (req, res) => {
    try {
       return await GetCombustiblesController(req, res);
    } catch (err) {
        throw err;
    }
});

rCombustible.get('/:id', async (req, res) => {
    try {
      return await GetIdCombustibleController(req, res);
    } catch (err) {
        throw err;
    }
});

rCombustible.post('/', async (req, res) => {
    try {
        return await CreateCombustibleController(req, res);
    } catch (err) {
        throw err;
    }
  });

rCombustible.put('/:id',async (req, res) => {
    try {
        return await UpdatePutCombustibleController(req, res);
    } catch (err) {
        throw err;
    }
});

rCombustible.patch('/:id', async (req, res) => {

    try {
        return await UpdatePatchCombustibleController(req, res);
    } catch (err) {
        throw err;
    }
});

rCombustible.delete('/:id', async (req, res) => {
    try {
        return await DeleteCombustibleController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rCombustible;