// backend/controllers/dataController.js
const BloodDonationManagement= require('../models/bloodDonationmanagement');
exports.getbloodDonationManagement = async (req, res) => {
  try {
    const bloodDonationmanagement = await BloodDonationManagement.find();
    res.json(bloodDonationmanagement);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.createbloodDonationManagement = async (req, res) => {
  const { donation } = req.body;
  const {donor}=req.body;
  const {donationDate}=req.body;
  const {donationTime}=req.body;
 try {
    const bloodDonationmanagement = await BloodDonationManagement.create({ text });
    res.status(201).json(bloodDonationmanagement);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

