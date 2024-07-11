const express = require('express'); 
const rVehicles = express.Router();

rVehicles.get('/', (req, res) => {
    res.send('Hello World! from Vehicles')
});

rVehicles.get('/:id', (req, res) => {
    res.send(`Hello World! from Vehicles - ${req.params.id}`)
});

rVehicles.post('/', (req, res) => {
    res.send('Hello World! from Vehicles - POST')
});

rVehicles.put('/:id', (req, res) => {
    res.send('Hello World! from Vehicles - PUT' + req.params.id)
});

rVehicles.patch('/:id', (req, res) => {
    res.send('Hello World! from Vehicles - PATCH' + req.params.id)
});

module.exports = rVehicles;