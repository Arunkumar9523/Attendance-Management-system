const express = require('express')
const staffController = require('../controller/staffController');
const { ensureAuthenticated, ensureRole } = require('../middleware/auth');
const router = express.Router()


router.get('/dashboard', ensureAuthenticated, ensureRole('staff'), staffController.staffPage)


module.exports = router
