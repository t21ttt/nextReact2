// backend/controllers/dataController.js
const BloodDonor= require('../models/bloodDonor');
exports.getbloodDonor = async (req, res) => {
  try {
    const bloodDonor= await BloodDonor.find();
    res.json(bloodDonor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.createbloodDonor = async (req, res) => {
  const { donorName } = req.body;
  const {dateOfBirth}=req.body;
  const {gender}=req.body;
  const {bloodType}=req.body;
  const {phoneNumber}=req.body;
  const {email}=req.body;
  const {medicalHistory}=req.body;
  const {lastDonationDate}=req.body; 
 try {
    const bloodDonor = await BloodDonor.create({ text });
    res.status(201).json(BloodDonor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

