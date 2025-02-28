const express=require('express')
const router=express.Router()
const studentController=require('../controller/studentController');
const {  ensureRole, ensureAuthenticated } = require('../middleware/auth');


router.get('/dashboard',ensureAuthenticated,ensureRole('student'),studentController.showStudentDashboard)

router.post('/markattendance',ensureAuthenticated,ensureRole('student'),studentController.markAttendance)

module.exports = router
