const bloodDriveSchema = new mongoose.Schema({
    driveName: String,
    location: String,
    startDate: Date,
    endDate: Date,
    contactInfo: {
      phoneNumber: String,
      email: String
    }
  });
  
const BloodDrive = mongoose.model('BloodDrive', bloodDriveSchema);
module.exports = BloodDrive;