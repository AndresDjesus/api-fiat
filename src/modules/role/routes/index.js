const express = require('express');
const rRole = express.Router();
const { createRoleController, getIdRoleController, updatePutRoleController, updatePatchRoleController , deleteRoleController , getRolesController} = require('../controllers');

rRole.get('/', async (req, res) => {
    try {
       return await getRolesController(req, res);
    } catch (err) {
        throw err;
    }
});

rRole.get('/:id', async (req, res) => {
    try {
      return await getIdRoleController(req, res);
    } catch (err) {
        throw err;
    }
});

rRole.post('/', async (req, res) => {
    try {
        return await createRoleController(req, res);
    } catch (err) {
        throw err;
    }
  });

rRole.put('/:id',async (req, res) => {
    try {
        return await updatePutRoleController(req, res);
    } catch (err) {
        throw err;
    }
});

rRole.patch('/:id',async (req, res) => {
    try {
        return await updatePatchRoleController(req, res);
    } catch (err) {
        throw err;
    }
});

rRole.delete('/:id',async (req, res) => {
    try {
        return await deleteRoleController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rRole