const punchSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    type: { type: String, enum: ['in', 'out'], required: true },
    time: { type: Date, required: true },
    machineId: { type: String },
    manuallyEdited: { type: Boolean, default: false }
  });
  
  module.exports = mongoose.model('Punch', punchSchema);