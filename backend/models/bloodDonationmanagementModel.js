
const bloodDonationManagementSchema = new mongoose.Schema({
    donation: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonation' },
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonor' },
    donationDate: Date,
    donationTime: String
  });
  const BloodDonationManagement = mongoose.model('BloodDonationManagement', bloodDonationManagementSchema);
  module.exports = BloodDonationManagement;  