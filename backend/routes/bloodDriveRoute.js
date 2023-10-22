// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodDriveController = require('../controllers/bloodDriveController');
router.get('/', bloodDriveController.getbloodDrive);
router.post('/', bloodDriveController.createbloodDrive);
router.delete('/:id', bloodDriveController.deleteBloodDrive);
module.exports = router;