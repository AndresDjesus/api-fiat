const express = require('express');
const rCategories = express.Router();
const { CreateCategoryController, GetIdCategoryController, UpdatePutCategoryController, UpdatePatchCategoryController , DeleteCategoryController , GetCategoriesController} = require('../controllers');

rCategories.get('/', async (req, res) => {
        try {
           return await GetCategoriesController(req, res);
        } catch (err) {
            throw err;
        }
    });

rCategories.get('/:id', async (req, res) => {
        try {
          return await GetIdCategoryController(req, res);
        } catch (err) {
            throw err;
        }
    });

rCategories.post('/', async (req, res) => {
        try {
            return await CreateCategoryController(req, res);
        } catch (err) {
            throw err;
        }
      });

rCategories.put('/:id',async (req, res) => {
        try {
            return await UpdatePutCategoryController(req, res);
        } catch (err) {
            throw err;
        }
    }); 

rCategories.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchCategoryController(req, res);
    } catch (err) {
        throw err;
    }
});

rCategories.delete('/:id', async (req, res) => {
        try {
            return await DeleteCategoryController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rCategories;