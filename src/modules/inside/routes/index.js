const express = require('express');
const rInside = express.Router();
const { CreateInsideController, GetIdInsideController, UpdatePutInsideController, UpdatePatchInsideController , DeleteInsideController , GetInsidesController} = require('../controllers');

rInside.get('/', async (req, res) => {
        try {
           return await GetInsidesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rInside.get('/:id', async (req, res) => {
        try {
          return await GetIdInsideController(req, res);
        } catch (err) {
            throw err;
        }
    });

rInside.post('/', async (req, res) => {
        try {
            return await CreateInsideController(req, res);
        } catch (err) {
            throw err;
        }
      });

rInside.put('/:id',async (req, res) => {
        try {
            return await UpdatePutInsideController(req, res);
        } catch (err) {
            throw err;
        }
    }); 

rInside.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchInsideController(req, res);
    } catch (err) {
        throw err;
    }
});

rInside.delete('/:id', async (req, res) => {
        try {
            return await DeleteInsideController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rInside;