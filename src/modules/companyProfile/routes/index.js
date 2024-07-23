const express = require('express');
const rCompanyProfile = express.Router();

const { GetCompanyProfileController, UpdatePutCompanyProfileController, UpdatePatchCompanyProfileController, DeleteCompanyProfileController, GetIdCompanyProfileController, CreateCompanyProfileController } = require('../controllers');


rCompanyProfile.get('/', async (req, res) => {
    try {
        return await GetCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompanyProfile.get('/:id', async (req, res) => {
    try {
        return await GetIdCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompanyProfile.post('/', async (req, res) => {
    try {
        return await CreateCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompanyProfile.put('/:id', async (req, res) => {
    try {
        return await UpdatePutCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompanyProfile.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

rCompanyProfile.delete('/:id', async (req, res) => {
    try {
        return await DeleteCompanyProfileController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rCompanyProfile;
