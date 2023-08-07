const express = require('express');
const ServiceController = require('../app/contollers/serviceController');

const router = express.Router();
const serviceController = new ServiceController();



//router.get('/:id', serviceController.getService.bind(serviceController));
router.post('/', serviceController.createService.bind(serviceController));
router.put('/:id', serviceController.updateService.bind(serviceController));
router.delete('/:id', serviceController.deleteService.bind(serviceController));
router.get('/search', serviceController.getAllServicesByName.bind(serviceController));
router.get('/', serviceController.getAllServices.bind(serviceController));




module.exports = router;