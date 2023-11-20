const express = require('express');

const UserController = require('../controller/TransaksiPembelian');

const router = express.Router();

// CREATE - POST
router.post('/newUser', UserController.createNewUser);

// READ - GET
router.get('/user', UserController.getAllUsers);

// // UPDATE - PATCH
// router.patch('/:idUser', UserController.updateUser);

// DELETE - DELETE
router.delete('/:idMember', UserController.deleteUser);



module.exports = router;