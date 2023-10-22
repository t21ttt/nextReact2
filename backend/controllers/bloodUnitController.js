// backend/controllers/dataController.js
const BloodUnit= require('../models/bloodUnit');

exports.getbloodUnit = async (req, res) => {
  try {
    const bloodUnit= await BloodUnit.find();
    res.json(bloodUnit);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createbloodUnit= async (req, res) => {
  const {unitNumber } = req.body;
  const {bloodType}=req.body;
  const {componentType}=req.body;
  const {donationDate}=req.body;
  const {donor}=req.body;
  const {bloodBank}=req.body;
 try {
    const bloodUnit = await BloodUnit.create({ text });
    res.status(201).json(bloodUnit);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

