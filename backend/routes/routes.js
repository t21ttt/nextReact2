// backend/routes/dataRoutes.js
const express = require('express');
const router = express.Router();
const controllers= require('../controllers/');
router.get('/', dataController.getData);
router.post('/', dataController.createData);
// Define routes
app.get('/donors', (req, res) => {
    BloodDonor.find()
      .then(donors => res.json(donors))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
  app.post('/donors', (req, res) => {
    const newDonor = new BloodDonor(req.body);
    newDonor.save()
      .then(donor => res.json(donor))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
  app.get('/recipients', (req, res) => {
    BloodRecipient.find()
      .then(recipients => res.json(recipients))
      .catch(err => res.status(500).json({ error: err.message }));
  });
  
  app.post('/recipients', (req, res) => {
    const newRecipient = new BloodRecipient(req.body);
    newRecipient.save()
      .then(recipient => res.json(recipient))
      .catch(err => res.status(500).json({ error: err.message }));
  });