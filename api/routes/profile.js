const express = require("express");
const { Buffer } = require("buffer");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/picture/save", authController.verifyToken, (req, res) => {
  const { email, id } = req.decodedToken;
  const { imageURL } = req.body;



});

module.exports = router;
