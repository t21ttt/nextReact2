// backend/controllers/dataController.js
const BloodBank = require('../models/bloodBank');
const Data = require('../models/bloodBank');

exports.getBloodBank = async (req, res) => {
  try {
    const bloodBank = await BloodBank.find();
    res.json(bloodBank);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createBloodBank = async (req, res) => {
  const { bankName } = req.body;
  const {location}=req.body;
  const {phoneNumber}=req.body;
  const {email}=req.body;

 try {
    const bloodBank = await BloodBank.create({ text });
    res.status(201).json(bloodBank);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

