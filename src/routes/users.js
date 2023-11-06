const express = require('express');
const UserController = require('../controller/users');
const router = express.Router();

// CREATE -POST
router.post('/',UserController.reateNewUser);
//GET
router.get('/', UserController.getAllUsers);


module.exports = router;