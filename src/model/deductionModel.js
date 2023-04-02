const DeductionSchema = new mongoose.Schema({
    inTime: {
      type: String,
      required: true,
    },
    outTime: {
      type: String,
      required: false,
    },
    deduction: {
      type: Number,
      default: 0,
    },
  });
  module.exports = mongoose.model('deduct', DeductionSchema);