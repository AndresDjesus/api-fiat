const express = require('express');
const rMotors = express.Router();
const { CreateMotorController, GetIdMotorController, UpdatePutMotorController, UpdatePatchMotorController , DeleteMotorController , GetMotorsController} = require('../controllers');

rMotors.get('/', async (req, res) => {
        try {
           return await GetMotorsController(req, res);
        } catch (err) {
            throw err;
        }
    });

rMotors.get('/:id', async (req, res) => {
        try {
          return await GetIdMotorController(req, res);
        } catch (err) {
            throw err;
        }
    });

rMotors.post('/', async (req, res) => {
        try {
            return await CreateMotorController(req, res);
        } catch (err) {
            throw err;
        }
      });

rMotors.put('/:id',async (req, res) => {
        try {
            return await UpdatePutMotorController(req, res);
        } catch (err) {
            throw err;
        }
    });

rMotors.patch('/:id', async (req, res) => {

        try {
            return await UpdatePatchMotorController(req, res);
        } catch (err) {
            throw err;
        }
    });

rMotors.delete('/:id', async (req, res) => {
        try {
            return await DeleteMotorController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rMotors;