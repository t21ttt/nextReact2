const bloodUnitSchema = new mongoose.Schema({
    unitNumber: String,
    bloodType: String,
    componentType: String,
    donationDate: Date,
    donor: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodDonor' },
    bloodBank: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' }
  });
  const BloodUnit= mongoose.model('BloodUnit', bloodUnitSchema);
  module.exports = BloodUnit; 