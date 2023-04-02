const Timecard = require('../model/timecardModel.js');

const createTimecard = async (req, res) => {
  try {
    const timecard = new Timecard(req.body);
    await timecard.save();
    res.status(201).send(timecard);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getAllTimecards = async (req, res) => {
  try {
    const timecards = await Timecard.find();
    res.send(timecards);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getTimecardById = async (req, res) => {
  try {
    const timecard = await Timecard.findById(req.params.id);
    if (!timecard) {
      return res.status(404).send('Timecard not found');
    }
    res.send(timecard);
  } catch (err) {
    res.status(500).send(err);
  }
};

const updateTimecardById = async (req, res) => {
  try {
    const timecard = await Timecard.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!timecard) {
      return res.status(404).send('Timecard not found');
    }
    res.send(timecard);
  } catch (err) {
    res.status(400).send(err);
  }
};

const deleteTimecardById = async (req, res) => {
  try {
    const timecard = await Timecard.findByIdAndDelete(req.params.id);
    if (!timecard) {
      return res.status(404).send('Timecard not found');
    }
    res.send(timecard);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  createTimecard,
  getAllTimecards,
  getTimecardById,
  updateTimecardById,
  deleteTimecardById
};
