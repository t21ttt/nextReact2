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
  const BloodRecipient = mongoose.model('BloodRecipient', bloodRecipientSchema);
  module.exports = BloodRecipient;    