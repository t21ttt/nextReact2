// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodTestController = require('../controllers/bloodTestController');
router.get('/', bloodTestController.getbloodTest);
router.post('/', bloodTestController.createbloodTest);
router.delete('/:id', bloodTestController.deleteBloodTest);
module.exports = router;