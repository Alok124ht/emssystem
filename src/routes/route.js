const express= require('express');
const router = express.Router();

const edgeController = require('../controllers/edgeController');
const timecardController = require('../controllers/timeardcontroller');
const deductionController = require('../controllers/deductionController')
router.post('/createTime', timecardController.createTimecard);

router.get('/getTime', timecardController.getAllTimecards);

router.get('/getTimeById:id', timecardController.getTimecardById);

router.patch('/updateTimeById:id', timecardController.updateTimecardById);

router.delete('/deleteTimecardById:id', timecardController.deleteTimecardById);

//////////////////////// deductionController///////////////////////////
router.get('/getDeductionsByEmployeeId', deductionController .getDeductionsByEmployeeId);
router.post('/createDeduction',deductionController.createDeduction)
router.put('/updateDeduction', deductionController.updateDeduction)
router.delete('/deleteDeduction', deductionController.deleteDeduction)
router.get('/getEdgesByEmployeeId:employeeId', edgeController.getEdgesByEmployeeId);

module.exports= router;