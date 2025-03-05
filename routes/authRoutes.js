const express = require('express');
const authController = require('../controller/authController');
const router = express.Router()

//Register User
router.post('/register', authController.registerUser)
router.get('/register',authController.ShowRegisterPage)

//Login User
router.post('/login', authController.LoginUser)
router.get('/login',authController.ShowLoginPage)

module.exports = router
