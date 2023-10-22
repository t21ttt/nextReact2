// backend/controllers/dataController.js
const BloodInventoryManagement= require('../models/bloodInventory');
exports.getbloodInventory = async (req, res) => {
  try {
    const bloodInventory= await BloodInventoryManagement.find();
    res.json(bloodInventory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createbloodInventory= async (req, res) => {
  const {bloodBank } = req.body;
  const {bloodUnit}=req.body;
  const {quantity}=req.body;
  const {expirationDate}=req.body;
 
 try {
    const bloodInventory = await BloodInventoryManagement.create({ text });
    res.status(201).json(bloodInventory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

