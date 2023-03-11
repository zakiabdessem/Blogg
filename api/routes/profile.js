const mongoose = require('mongoose')
const router = require("express").Router();
const authController = require("../controllers/authControllers");
const user = require('../models/user')


router.post("/picture/save", authController.verifyToken, async (req, res) => {
  const { email, id } = req.decodedToken;
  const { imageURL } = req.body;

const User = await user.findOneAndUpdate({email, _id: id},{profile_pic: imageURL })

});

module.exports = router;
