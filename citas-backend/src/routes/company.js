const express = require('express');
const CompanyController = require('../app/contollers/companyController');

const router = express.Router();
const userController = new CompanyController();

router.post('/', userController.createCompany.bind(userController));
router.put('/:id', userController.updateCompany.bind(userController));
router.delete('/:id', userController.deleteCompany.bind(userController));
router.get('/search', userController.getAllCompanysByName.bind(userController));
router.get('/', userController.getAllCompanys.bind(userController));

module.exports = router;