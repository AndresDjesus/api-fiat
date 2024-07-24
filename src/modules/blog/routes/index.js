const express = require('express');
const rBlog = express.Router();
const { CreateBlogController, GetIdBlogController, UpdatePutBlogController, UpdatePatchBlogController , DeleteBlogController , GetBlogController} = require('../controllers');

rBlog.get('/', async (req, res) => {
        try {
           return await GetBlogController(req, res);
        } catch (err) {
            throw err;
        }
    });

rBlog.get('/:id', async (req, res) => {
        try {
          return await GetIdBlogController(req, res);
        } catch (err) {
            throw err;
        }
    });

rBlog.post('/', async (req, res) => {
        try {
            return await CreateBlogController(req, res);
        } catch (err) {
            throw err;
        }
      });

rBlog.put('/:id',async (req, res) => {
        try {
            return await UpdatePutBlogController(req, res);
        } catch (err) {
            throw err;
        }
    });

rBlog.patch('/:id', async (req, res) => {
    try {
        return await UpdatePatchBlogController(req, res);
    } catch (err) {
        throw err;
    }
});

rBlog.delete('/:id', async (req, res) => {
        try {
            return await DeleteBlogController(req, res);
        } catch (err) {
            throw err;
        }
    });
    
module.exports = rBlog;