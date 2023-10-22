const bloodInventoryManagementSchema = new mongoose.Schema({
    bloodBank: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodBank' },
    bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' },
    quantity: Number,
    expirationDate: Date
  });
  
  const BloodInventoryManagement = mongoose.model('BloodInventoryManagement', bloodInventoryManagementSchema);
  module.exports = BloodInventoryManagement;  