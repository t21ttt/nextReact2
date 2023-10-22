// backend/controllers/dataController.js
const BloodTransfusionManagement= require('../models/bloodTransfusionManagement');

exports.getbloodTransfusionManagement = async (req, res) => {
  try {
    const bloodTransfusionManagement= await BloodTransfusionManagement.find();
    res.json(bloodTransfusionManagement);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createbloodTransfusionManagement= async (req, res) => {
  const {transfusion } = req.body;
  const {recipient}=req.body;
  const {transfusionDate}=req.body;
  const {transfusionTime}=req.body;
 try {
    const bloodTransfusionManagement = await BloodTransfusionManagement.create({ text });
    res.status(201).json(bloodTransfusionManagement);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

