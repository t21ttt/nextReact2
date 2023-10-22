const bloodTestSchema = new mongoose.Schema({
    testType: String,
    testDate: Date,
    testResult: String,
    bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' }
  });
  const BloodTest= mongoose.model('BloodTest', bloodTestSchema);
  module.exports = BloodTest;      