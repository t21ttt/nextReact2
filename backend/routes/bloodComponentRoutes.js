// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodComponentController = require('../controllers/bloodComponentController');
router.get('/', bloodComponentController.getBloodComponent);
router.post('/', bloodComponentController.createBloodCompoent);
router.delete('/:id', bloodComponentController.deleteBloodCompoent);
module.exports = router;