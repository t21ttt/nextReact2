// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodDonorController = require('../controllers/bloodDonorController');
router.get('/', bloodDonorController.getbloodDonor);
router.post('/', bloodDonorController.createBloodDonor);
router.delete('/:id', bloodDonorController.deleteBloodDonor);
module.exports = router;