// backend/controllers/dataController.js
const BloodTransfusion = require('../models/bloodTransfusion');
const BloodTest= require('../models/bloodTransfusion');
exports.getbloodTransfusion = async (req, res) => {
  try {
    const BloodTransfusion= await BloodTransfusion.find();
    res.json(BloodTransfusion);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createbloodTransfusion= async (req, res) => {
  const {transfusionDate } = req.body;
  const {transfusionTime}=req.body;
  const {bloodUnit}=req.body;
  const {recipient}=req.body;
 try {
    const bloodTransfusion = await BloodTransfusion.create({ text });
    res.status(201).json(bloodTransfusion);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

