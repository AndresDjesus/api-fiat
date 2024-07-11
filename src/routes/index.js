const express = require('express');

const rVehicles = require('../modules/vehicles/routes');
const router = express.Router();

router.use('/vehicles', rVehicles);

module.exports = router;