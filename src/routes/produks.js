const express = require('express');

const ProduksController = require('../controller/produks');

const router = express.Router();

// CREATE - POST
router.post('/', ProduksController.createNewProduks);

// READ - GET
router.get('/', ProduksController.getAllProduks);

// READ - GET
router.get('/:segment', ProduksController.detailProduk);

// UPDATE - PATCH
router.put('/:idProduks', ProduksController.updateProduks);

// DELETE - DELETE
router.delete('/:idProduks', ProduksController.deleteProduks);



module.exports = router;