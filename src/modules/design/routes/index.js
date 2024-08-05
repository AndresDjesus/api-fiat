const express = require('express');
const rDesign = express.Router();
const { CreateDesignController, GetIdDesignController, UpdatePutDesignController, UpdatePatchDesignController , DeleteDesignController , GetDesignsController} = require('../controllers');

rDesign.get('/', async (req, res) => {
        try {
           return await GetDesignsController(req, res);
        } catch (err) {
            throw err;
        }
    });

rDesign.get('/:id', async (req, res) => {
        try {
          return await GetIdDesignController(req, res);
        } catch (err) {
            throw err;
        }
    });

rDesign.post('/', async (req, res) => {
        try {
            return await CreateDesignController(req, res);
        } catch (err) {
            throw err;
        }
      });

rDesign.put('/:id',async (req, res) => {
        try {
            return await UpdatePutDesignController(req, res);
        } catch (err) {
            throw err;
        }
    }); 

rDesign.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchDesignController(req, res);
    } catch (err) {
        throw err;
    }
});

rDesign.delete('/:id', async (req, res) => {
        try {
            return await DeleteDesignController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rDesign;