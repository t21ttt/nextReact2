// backend/controllers/dataController.js
const BloodTest= require('../models/bloodTest');
exports.getbloodTest = async (req, res) => {
  try {
    const bloodTest= await BloodTest.find();
    res.json(bloodTest);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.createbloodTest= async (req, res) => {
  const {testType } = req.body;
  const {testDate}=req.body;
  const {testResult}=req.body;
  const {bloodUnit}=req.body;
 try {
    const bloodTest = await BloodTest.create({ text });
    res.status(201).json(bloodTest);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

