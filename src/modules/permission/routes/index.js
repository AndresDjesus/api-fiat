const express = require('express');
const rPermission = express.Router();
const { createPermissionController, getIdPermissionController, updatePermissionPutController, updatePermissionPatchController , deletePermissionController , getPermissionController} = require('../controllers');

rPermission.get('/', async (req, res) => {
    try {
       return await getPermissionController(req, res);
    } catch (err) {
        throw err;
    }
});

rPermission.get('/:id', async (req, res) => {
    try {
      return await getIdPermissionController(req, res);
    } catch (err) {
        throw err;
    }
});

rPermission.post('/', async (req, res) => {
    try {
        return await createPermissionController(req, res);
    } catch (err) {
        throw err;
    }
  });

rPermission.put('/:id',async (req, res) => {
    try {
        return await updatePermissionPutController(req, res);
    } catch (err) {
        throw err;
    }
});

rPermission.patch('/:id',async (req, res) => {
    try {
        return await updatePermissionPatchController(req, res);
    } catch (err) {
        throw err;
    }
});

rPermission.delete('/:id',async (req, res) => {
    try {
        return await deletePermissionController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rPermission;