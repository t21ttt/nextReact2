// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const bloodRecipientController = require('../controllers/bloodRecipientController');
router.get('/', bloodRecipientController.getbloodRecipient);
router.post('/', bloodRecipientController.createbloodRecipient);
router.delete('/:id', bloodRecipientController.deleteBloodRecipient);
module.exports = router;