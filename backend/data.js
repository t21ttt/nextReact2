// Required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create Express app
const app = express();
// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/blood_management_system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Define schemas and models
const bloodDonorSchema = new mongoose.Schema({
  donorName: String,
  dateOfBirth: Date,
  gender: String,
  bloodType: String,
  contactInfo: {
    phoneNumber: String,
    email: String
  },
  medicalHistory: String,
  lastDonationDate: Date
});

const bloodRecipientSchema = new mongoose.Schema({
  recipientName: String,
  dateOfBirth: Date,
  gender: String,
  bloodType: String,
  contactInfo: {
    phoneNumber: String,
    email: String
  },
  medicalCondition: String,
  requiredBloodType: String,
  requestDate: Date,
  status: String
});

const bloodUnitSchema = new mongoose.Schema({
  unitNumber: String,
  bloodType: String,
  componentType: String,
  donationDate: Date,
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonor' },
  bloodBank: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' }
});

const bloodBankSchema = new mongoose.Schema({
  bankName: String,
  location: String,
  contactInfo: {
    phoneNumber: String,
    email: String
  }
});

const bloodRequestSchema = new mongoose.Schema({
  requestedBloodType: String,
  componentType: String,
  requestDate: Date,
  status: String,
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' }
});

const bloodTransfusionSchema = new mongoose.Schema({
  transfusionDate: Date,
  transfusionTime: String,
  bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' }
});

const bloodComponentSchema = new mongoose.Schema({
  componentType: String,
  bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' }
});

const bloodTestSchema = new mongoose.Schema({
  testType: String,
  testDate: Date,
  testResult: String,
  bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' }
});

const bloodDonationCampSchema = new mongoose.Schema({
  campName: String,
  location: String,
  startDate: Date,
  endDate: Date,
  contactInfo: {
    phoneNumber: String,
    email: String
  }
});

const bloodDriveSchema = new mongoose.Schema({
  driveName: String,
  location: String,
  startDate: Date,
  endDate: Date,
  contactInfo: {
    phoneNumber: String,
    email: String
  }
});

const bloodInventoryManagementSchema = new mongoose.Schema({
  bloodBank: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' },
  bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' },
  quantity: Number,
  expirationDate: Date
});

const bloodDonationManagementSchema = new mongoose.Schema({
  donation: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonation' },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonor' },
  donationDate: Date,
  donationTime: String
});

const bloodTransfusionManagementSchema = new mongoose.Schema({
  transfusion: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodTransfusion' },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' },
  transfusionDate: Date,
  transfusionTime: String
});

// Define models
const BloodDonor = mongoose.model('BloodDonor', bloodDonorSchema);
const BloodRecipient = mongoose.model('BloodRecipient', bloodRecipientSchema);
const BloodUnit = mongoose.model('BloodUnit', bloodUnitSchema);
const BloodBank = mongoose.model('BloodBank', bloodBankSchema);
const BloodRequest = mongoose.model('BloodRequest', bloodRequestSchema);
const BloodTransfusion = mongoose.model('BloodTransfusion', bloodTransfusionSchema);
const BloodComponent = mongoose.model('BloodComponent', bloodComponentSchema);
const BloodTest = mongoose.model('BloodTest', bloodTestSchema);
const BloodDonationCamp = mongoose.model('BloodDonationCamp', bloodDonationCampSchema);
const BloodDrive = mongoose.model('BloodDrive', bloodDriveSchema);
const BloodInventoryManagement = mongoose.model('BloodInventoryManagement', bloodInventoryManagementSchema);
const BloodDonationManagement = mongoose.model('BloodDonationManagement', bloodDonationManagementSchema);
const BloodTransfusionManagement = mongoose.model('BloodTransfusionManagement', bloodTransfusionManagementSchema);

// Define routes
app.get('/donors', (req, res) => {
  BloodDonor.find()
    .then(donors => res.json(donors))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/donors', (req, res) => {
  const newDonor = new BloodDonor(req.body);
  newDonor.save()
    .then(donor => res.json(donor))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/recipients', (req, res) => {
  BloodRecipient.find()
    .then(recipients => res.json(recipients))
    .catch(err => res.status(500).json({ error: err.message }));
});

app.post('/recipients', (req, res) => {
  const newRecipient = new BloodRecipient(req.body);
  newRecipient.save()
    .then(recipient => res.json(recipient))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Add routes for other entities

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));