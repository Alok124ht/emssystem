const express = require('express');
const router = express.Router();
const Punch = require('../models/punch');

// Create a new punch record
router.post('/createPunch', async (req, res) => {
  try {
    const { employeeId, type, time, machineId } = req.body;
    const punch = new Punch({ employeeId, type, time, machineId });
    await punch.save();
    res.status(201).json(punch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating punch record' });
  }
});

// Retrieve all punch records for an employee on a given day
router.get('/:employeeId/:date', async (req, res) => {
  try {
    const { employeeId, date } = req.params;
    const punches = await Punch.find({
      employeeId,
      time: {
        $gte: new Date(date),
        $lt: new Date(`${date}T23:59:59.999Z`),
      },
    }).sort({ time: 'asc' });
    res.json(punches);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving punch records' });
  }
});

// Update an existing punch record
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { time } = req.body;
    const punch = await Punch.findById(id);
    if (!punch) {
      return res.status(404).json({ message: 'Punch record not found' });
    }
    punch.time = time;
    await punch.save();
    res.json(punch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating punch record' });
  }
});

// Delete an existing punch record
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const punch = await Punch.findByIdAndDelete(id);
    if (!punch) {
      return res.status(404).json({ message: 'Punch record not found' });
    }
    res.json(punch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting punch record' });
  }
});
app.get('/presence-edge-details/:inTime/:outTime', (req, res) => {
    const inTime = new Date(req.params.inTime);
    const outTime = new Date(req.params.outTime);
  
    // Calculate total present time
    const presentTimeInMilliseconds = outTime.getTime() - inTime.getTime();
    const presentTimeInMinutes = presentTimeInMilliseconds / 1000 / 60;
    const presentTime = `${Math.floor(presentTimeInMinutes / 60)} hours ${Math.floor(presentTimeInMinutes % 60)} minutes`;
  
    // Fetch any valid deductions and exemptions
    const deductions = []; // fetch from database
    const exemptions = []; // fetch from database
  
    // Return the details of the presence edge
    res.json({
      presentTime,
      deductions,
      exemptions
    });
  });
  
  app.put('/presence-edge-details/:inTime/:outTime', (req, res) => {
    const inTime = new Date(req.params.inTime);
    const outTime = new Date(req.params.outTime);
    const newInTime = new Date(req.body.newInTime);
  
    // Update the punch time
    // ...
  
    // Recalculate the timeline and related metrics
    // ...
  
    res.sendStatus(200);
  });
  
module.exports = router;
