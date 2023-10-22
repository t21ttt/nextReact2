// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodRequestController = require('../controllers/bloodRequestController');
router.get('/', bloodRequestController.getbloodRequest);
router.post('/', bloodRequestController.createbloodRequest);
router.delete('/:id', bloodRequestController.deleteBloodRequest);
module.exports = router;