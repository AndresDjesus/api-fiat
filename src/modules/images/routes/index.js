const express = require('express');
const rImages = express.Router();
const { CreateImageController, GetIdImageController, UpdatePutImageController, UpdatePatchImageController , DeleteImageController , GetImagesController} = require('../controllers');

rImages.get('/', async (req, res) => {
        try {
           return await GetImagesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rImages.get('/:id', async (req, res) => {
        try {
          return await GetIdImageController(req, res);
        } catch (err) {
            throw err;
        }
    });

rImages.post('/', async (req, res) => {
        try {
            return await CreateImageController(req, res);
        } catch (err) {
            throw err;
        }
      });

rImages.put('/:id',async (req, res) => {
        try {
            return await UpdatePutImageController(req, res);
        } catch (err) {
            throw err;
        }
    });

rImages.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchImageController(req, res);
    } catch (err) {
        throw err;
    }
});

rImages.delete('/:id', async (req, res) => {
        try {
            return await DeleteImageController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rImages;