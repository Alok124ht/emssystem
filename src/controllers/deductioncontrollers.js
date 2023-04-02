const DeductionModel = require('../model/deductionModel.js');

// Handler for GET /deductions/:employeeId
const getDeductionsByEmployeeId = async (req, res) => {
  try {
    const { employeeId } = req.params;

    // Query the database for all deductions for the given employee ID
    const deductions = await DeductionModel.find({ employeeId });

    // Return the deductions as JSON
    res.json(deductions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Handler for POST /deductions
const createDeduction = async (req, res) => {
  try {
    const { employeeId, inTime, outTime, deduction } = req.body;

    // Create a new Deduction object using the request body
    const newDeduction = new DeductionModel({
      employeeId,
      inTime,
      outTime,
      deduction,
    });

    // Save the new Deduction object to the database
    await newDeduction.save();

    // Return the new Deduction object as JSON
    res.json(newDeduction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Handler for PUT /deductions/:id
const updateDeduction = async (req, res) => {
  try {
    const { id } = req.params;
    const { inTime, outTime, deduction } = req.body;

    // Find the Deduction object in the database by ID
    const deductionToUpdate = await DeductionModel.findById(id);

    // Update the properties of the Deduction object with the request body
    deductionToUpdate.inTime = inTime || deductionToUpdate.inTime;
    deductionToUpdate.outTime = outTime || deductionToUpdate.outTime;
    deductionToUpdate.deduction = deduction || deductionToUpdate.deduction;

    // Save the updated Deduction object to the database
    await deductionToUpdate.save();

    // Return the updated Deduction object as JSON
    res.json(deductionToUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Handler for DELETE /deductions/:id
const deleteDeduction = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the Deduction object in the database by ID and remove it
    await DeductionModel.findByIdAndRemove(id);

    // Return a success message
    res.json({ message: 'Deduction removed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getDeductionsByEmployeeId,
  createDeduction,
  updateDeduction,
  deleteDeduction,
};