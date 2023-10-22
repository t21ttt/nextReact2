// backend/controllers/dataController.js
const BloodDrive= require('../models/bloodDrive');
exports.getbloodDrive = async (req, res) => {
  try {
    const bloodDrive= await BloodDrive.find();
    res.json(bloodDrive);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
exports.createbloodDrive = async (req, res) => {
  const {driveName } = req.body;
  const {location}=req.body;
  const {startDate}=req.body;
  const {endDate}=req.body;
  const {phoneNumber}=req.body;
  const {email}=req.body;
  
 try {
    const bloodDrive = await BloodDrive.create({ text });
    res.status(201).json(BloodDrive);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

