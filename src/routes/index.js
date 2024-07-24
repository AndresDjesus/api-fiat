const express = require('express');

const rVehicles = require('../modules/vehicles/routes');
const rCategories = require('../modules/categories/routes');
const rMotors = require('../modules/motors/routes');
const rImages = require('../modules/images/routes');
const rServices = require('../modules/services/routes');
const rCompany = require('../modules/company/routes');
const rCompanyProfile = require('../modules/companyProfile/routes');
const rLocation = require('../modules/location/routes');
const rBlog = require('../modules/blog/routes');
const router = express.Router();

router.use('/vehicles', rVehicles);
router.use('/categories', rCategories);
router.use('/motors', rMotors);
router.use('/images', rImages);
router.use('/services', rServices);
router.use('/company', rCompany);
router.use('/companyProfile', rCompanyProfile);
router.use('/location', rLocation);
router.use('/blog', rBlog);

module.exports = router;