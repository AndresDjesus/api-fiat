const express = require('express');
const rFooter = express.Router();
const { CreateFooterController, GetIdFooterController, UpdatePutFooterController, UpdatePatchFooterController , DeleteFooterController , GetFooterController} = require('../controllers');

rFooter.get('/', async (req, res) => {
        try {
           return await GetFooterController(req, res);
        } catch (err) {
            throw err;
        }
    });

rFooter.get('/:id', async (req, res) => {
        try {
          return await GetIdFooterController(req, res);
        } catch (err) {
            throw err;
        }
    });

rFooter.post('/', async (req, res) => {
        try {
            return await CreateFooterController(req, res);
        } catch (err) {
            throw err;
        }
      });

rFooter.put('/:id',async (req, res) => {
        try {
            return await UpdatePutFooterController(req, res);
        } catch (err) {
            throw err;
        }
    });

rFooter.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchFooterController(req, res);
    } catch (err) {
        throw err;
    }
});

rFooter.delete('/:id', async (req, res) => {
        try {
            return await DeleteFooterController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rFooter;