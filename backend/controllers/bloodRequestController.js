// backend/controllers/dataController.js
const BloodRequest= require('../models/bloodRequest');
exports.getbloodRequest = async (req, res) => {
  try {
    const bloodRequest= await BloodRequest.find();
    res.json(bloodRequest);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createbloodRequest= async (req, res) => {
  const {requestedBloodType } = req.body;
  const {componentType}=req.body;
  const {requestDate}=req.body;
  const {statuse}=req.body;
  const {recipient}=req.body;

 
 try {
    const bloodRequest = await BloodRequest.create({ text });
    res.status(201).json(bloodRequest);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

