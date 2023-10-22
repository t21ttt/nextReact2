// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodUnitController = require('../controllers/bloodTestController');
router.get('/', bloodUnitController.getbloodUnit);
router.post('/', bloodUnitController.createbloodUnit);
router.delete('/:id', bloodUnitController.deleteBloodUnit);
module.exports = router;