// backend/controllers/dataController.js
const BloodDonationCamp = require('../models/bloodDonationCamp');
exports.getbloodDonationCamp = async (req, res) => {
  try {
    const bloodDonationCamp = await BloodDonationCamp.find();
    res.json(bloodDonationCamp);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createDonationCamp = async (req, res) => {
  const { campName } = req.body;
  const {location}=req.body;
  const {startDate}=req.body;
  const {endDate}=req.body;
  const {phoneNumber}=req.body;
  const {email}=req.body;

 try {
    const bloodDonationCamp = await BloodDonationCamp.create({ text });
    res.status(201).json(bloodDonationCamp);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

