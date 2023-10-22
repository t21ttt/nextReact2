// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodDonationController = require('../controllers/bloodDonationController');
router.get('/', bloodDonationController.getBloodDonationCamp);
router.post('/', bloodDonationController.createBloodDonationCamp);
router.delete('/:id', bloodDonationController.deleteBloodDonationCamp);
module.exports = router;