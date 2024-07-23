const express = require('express');
const rCompany = express.Router();
const { CreateCompanyController, GetIdCompanyController, UpdatePutCompanyController, UpdatePatchCompanyController , DeleteCompanyController , GetCompanyController} = require('../controllers');

rCompany.get('/', async (req, res) => {
        try {
           return await GetCompanyController(req, res);
        } catch (err) {
            throw err;
        }
    });

rCompany.get('/:id', async (req, res) => {
        try {
          return await GetIdCompanyController(req, res);
        } catch (err) {
            throw err;
        }
    });

rCompany.post('/', async (req, res) => {
        try {
            return await CreateCompanyController(req, res);
        } catch (err) {
            throw err;
        }
      });

rCompany.put('/:id',async (req, res) => {
        try {
            return await UpdatePutCompanyController(req, res);
        } catch (err) {
            throw err;
        }
    });

rCompany.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchCompanyController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompany.delete('/:id', async (req, res) => {
        try {
            return await DeleteCompanyController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rCompany;
