// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodDonationController = require('../controllers/bloodDonationController');
router.get('/', bloodDonationController.getBloodDonation);
router.post('/', bloodDonationController.createBloodDonation);
router.delete('/:id', bloodDonationController.deleteBloodDonation);
module.exports = router;