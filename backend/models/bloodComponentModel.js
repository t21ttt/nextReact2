const bloodComponentSchema = new mongoose.Schema({
    componentType: String,
    bloodUnit: { type: mongoose.Schema.Types.ObjectId, ref: 'BloodUnit' }
  });
  const BloodComponent= mongoose.model('BloodComponent', bloodComponentSchema);
  module.exports = BloodComponent; 
  
  