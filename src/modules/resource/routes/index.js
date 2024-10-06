const express = require('express');
const rResource = express.Router();
const { CreateResourceController, GetIdResourceController, UpdateResourcePutController, UpdateResourcePatchController , DeleteResourceController , GetResourcesController} = require('../controllers');

rResource.get('/', async (req, res) => {
        try {
           return await GetResourcesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rResource.get('/:id', async (req, res) => {
        try {
          return await GetIdResourceController(req, res);
        } catch (err) {
            throw err;
        }
    });

rResource.post('/', async (req, res) => {
        try {
            return await CreateResourceController(req, res);
        } catch (err) {
            throw err;
        }
      });

rResource.put('/:id',async (req, res) => {
        try {
            return await UpdateResourcePutController(req, res);
        } catch (err) {
            throw err;
        }
      });

rResource.patch('/:id',async (req, res) => {
        try {
            return await UpdateResourcePatchController(req, res);
        } catch (err) {
            throw err;
        }
      });

rResource.delete('/:id',async (req, res) => {
        try {
            return await DeleteResourceController(req, res);
        } catch (err) {
            throw err;
        }
      });

module.exports = rResource