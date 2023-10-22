// backend/controllers/dataController.js
const BloodComponent = require('../models/bloodComponent');
exports.getbloodComponent = async (req, res) => {
  try {
    const bloodComponent = await BloodComponent.find();
    res.json(bloodComponent);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createBloodCompoent = async (req, res) => {
  const { componentType } = req.body;
  const {bloodUnit}=req.body;

 try {
    const bloodComponent = await BloodComponent.create({ text });
    res.status(201).json(bloodComponent);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

