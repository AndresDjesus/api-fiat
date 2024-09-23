const express = require('express');
const rUser = express.Router();
const { createUserController, getIdUserController, updatePutUserController, updatePatchUserController , deleteUserController , getUsersController} = require('../controllers');

rUser.get('/', async (req, res) => {
    try {
       return await getUsersController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.get('/:id', async (req, res) => {
    try {
      return await getIdUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.post('/', async (req, res) => {
    try {
        return await createUserController(req, res);
    } catch (err) {
        throw err;
    }
  });

rUser.put('/:id',async (req, res) => {
    try {
        return await updatePutUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.patch('/:id',async (req, res) => {
    try {
        return await updatePatchUserController(req, res);
    } catch (err) {
        throw err;
    }
});

rUser.delete('/:id',async (req, res) => {
    try {
        return await deleteUserController(req, res);
    } catch (err) {
        throw err;
    }
});

module.exports = rUser