const express = require('express')
const router = express.Router()

const authController = require('../controllers/authControllers')
router.post('/sign-up', authController.post_signUp)
router.post('/login', authController.post_login)
module.exports = router