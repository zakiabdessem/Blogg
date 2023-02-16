const express = require('express')
const router = express.Router()

const authController = require('../controllers/authControllers')
router.post('/sign-up', authController.post_signUp)

module.exports = router