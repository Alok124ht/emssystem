const TimecardSchema = new mongoose.Schema({
    inconclusive: {
      type: Boolean,
      default: false,
    },
    incomplete: {
      type: Boolean,
      default: false,
    },
    inTime: {
      type: String,
      required: true,
    },
    outTime: {
      type: String,
      required: false,
    },
    deductions: {
      type: [DeductionSchema],
      required: true,
    },
  });
  
  const TimecardModel = mongoose.model('Timecard', TimecardSchema);
  
  module.exports = TimecardModel;