// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodBankController = require('../controllers/bloodBankController');
router.get('/', bloodBankController.getBloodBank);
router.post('/', bloodBankController.createBloodBank);
router.delete('/:id', bloodBankController.deleteBloodBank);
module.exports = router;