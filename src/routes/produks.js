const express = require('express');

const UserController = require('../controller/produk');

const router = express.Router();

router.get('/', UserController.getAllProd);

router.post('/',UserController.createNewProd);

module.exports = router;