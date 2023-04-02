const edgeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    type: { type: String, enum: ['presence', 'absence'], required: true },
    startPunchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Punch', required: true },
    endPunchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Punch', required: true },
    totalPresentTime: { type: Number, default: 0 },
    totalAbsentTime: { type: Number, default: 0 },
    totalExemption: { type: Number, default: 0 },
    totalDeduction: { type: Number, default: 0 },
    manuallyEdited: { type: Boolean, default: false }
  });
  
  module.exports = mongoose.model('Edge', edgeSchema);