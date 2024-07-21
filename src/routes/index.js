const express = require('express');

const rVehicles = require('../modules/vehicles/routes');
const rCategories = require('../modules/categories/routes');
const rMotors = require('../modules/motors/routes');
const rImages = require('../modules/images/routes');
const rServices = require('../modules/services/routes');
const router = express.Router();

router.use('/vehicles', rVehicles);
router.use('/categories', rCategories);
router.use('/motors', rMotors);
router.use('/images', rImages);
router.use('/services', rServices);

module.exports = router;