const express = require('express');
const rIndex = express.Router();
const { CreateIndexController, GetIdIndexController, UpdatePutIndexController, UpdatePatchIndexController , DeleteIndexController , GetIndexesController} = require('../controllers');

rIndex.get('/', async (req, res) => {
    try {
       return await GetIndexesController(req, res);
    } catch (err) {
        throw err;
    }
});

rIndex.get('/:id', async (req, res) => {
    try {
      return await GetIdIndexController(req, res);
    } catch (err) {
        throw err;
    }
});

rIndex.post('/', async (req, res) => {
    try {
        return await CreateIndexController(req, res);
    } catch (err) {
        throw err;
    }
  });

rIndex.put('/:id',async (req, res) => {
    try {
        return await UpdatePutIndexController(req, res);
    } catch (err) {
        throw err;
    }
});

rIndex.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchIndexController(req, res);
    } catch (err) {
        throw err;
    }
});

rIndex.delete('/:id', async (req, res) => {
    try {
        return await DeleteIndexController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rIndex;
