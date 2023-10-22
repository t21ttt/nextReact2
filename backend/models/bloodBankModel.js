const bloodBankSchema = new mongoose.Schema({
    bankName: String,
    location: String,
    contactInfo: {
      phoneNumber: String,
      email: String
    }
  });
  
  const BloodBank= mongoose.model('BloodBank', bloodBankSchema);
  module.exports = BloodBank; 
  