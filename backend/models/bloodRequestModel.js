const bloodRequestSchema = new mongoose.Schema({
    requestedBloodType: String,
    componentType: String,
    requestDate: Date,
    status: String,
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' }
  });

  const BloodRequest= mongoose.model('BloodRequest', bloodRequestSchema);
  module.exports = BloodRequest;    