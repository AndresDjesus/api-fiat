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
const rFooter = require('../modules/footer/routes');
const rCombustible = require('../modules/combustible/routes');
const rDesign = require('../modules/design/routes');
const rInside = require('../modules/inside/routes');
const rTechnology = require('../modules/technology/routes');
const rIndex = require('../modules/index/routes');
const rAdvertising = require('../modules/advertising/routes');
const rUser = require('../modules/user/routes');
const rRole = require('../modules/role/routes');
const rPermission = require('../modules/permission/routes');
const rResource = require('../modules/resource/routes');
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
router.use('/footer', rFooter);
router.use('/combustible', rCombustible);
router.use('/design', rDesign);
router.use('/inside' , rInside);
router.use('/technology', rTechnology);
router.use('/index', rIndex);
router.use('/advertising', rAdvertising);
router.use('/user', rUser);
router.use('/role', rRole);
router.use('/permission', rPermission);
router.use('/resource', rResource);

router.use('/auth', require('../modules/auth')); 

module.exports = router;