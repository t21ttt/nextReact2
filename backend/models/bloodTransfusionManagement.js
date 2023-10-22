const bloodTransfusionManagementSchema = new mongoose.Schema({
    transfusion: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodTransfusion' },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodRecipient' },
    transfusionDate: Date,
    transfusionTime: String
  });
  const BloodTransfusionMgt= mongoose.model('BloodTransfusionManagement', bloodTransfusionManagementSchema);
  module.exports = BloodTransfusionMgt;        