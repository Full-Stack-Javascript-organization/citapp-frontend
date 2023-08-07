const express = require('express');
const UserController = require('../app/contollers/UserController');

const router = express.Router();
const userController = new UserController();



//router.get('/:id', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));
router.get('/search', userController.getAllUsersByName.bind(userController));
router.get('/', userController.getAllUsers.bind(userController));




module.exports = router;