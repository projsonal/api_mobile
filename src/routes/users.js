const express = require('express');

const UserController = require('../controller/users.js');

const router = express.Router();

// CREATE - POST
router.post('/newMember', UserController.createNewUser);

// READ - GET
router.get('/member', UserController.getAllUsers);

// // UPDATE - PATCH
// router.patch('/:idUser', UserController.updateUser);

// DELETE - DELETE
router.delete('/:idMember', UserController.deleteUser);



module.exports = router;