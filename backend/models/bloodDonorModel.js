const bloodDonorSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: String,
  bloodType: String,
  contactInfo: {
    phoneNumber: String,
    email: String,
  },
  medicalHistory: String,
  lastDonationDate: Date,
});
const BloodDonor = mongoose.model('BloodDonor', bloodDonorSchema);
module.exports = BloodDonor;