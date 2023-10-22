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
  const BloodDonationCamp = mongoose.model('BloodDonationCamp', bloodDonationCampSchema);
  module.exports = BloodDonationCamp; 
  