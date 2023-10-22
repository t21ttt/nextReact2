const bloodTransfusionSchema = new mongoose.Schema({
    transfusionDate: Date,
    transfusionTime: String,
    bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' }
  });
  const BloodTransfusion= mongoose.model('BloodTransfusion', bloodTransfusionSchema);
  module.exports = BloodTransfusion;      