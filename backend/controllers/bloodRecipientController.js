// backend/controllers/dataController.js
const BloodRecipient= require('../models/bloodRecipient');
exports.getbloodRecipient = async (req, res) => {
  try {
    const bloodRecipient= await BloodRecipient.find();
    res.json(bloodRecipient);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createbloodRecipient= async (req, res) => {
  const {recipientName } = req.body;
  const {dateOfBirth}=req.body;
  const {gender}=req.body;
  const {bloodType}=req.body;
  const {phoneNumber}=req.body;
  const {email}=req.body;
  const {medicalCondition}=req.body;
  const {requiredBloodType}=req.body;
  const {requestDate}=req.body;
  const {status}=req.body;

 
 try {
    const bloodRecipient= await BloodRecipient.create({ text });
    res.status(201).json(bloodRecipient);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

