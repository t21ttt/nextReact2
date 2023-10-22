// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodTransfusionController = require('../controllers/bloodTestController');
router.get('/', bloodTransfusionController.getbloodTransfusion);
router.post('/', bloodTransfusionController.createbloodTransfusion);
router.delete('/:id', bloodTransfusionController.deleteBloodTransfusiont);
module.exports = router;