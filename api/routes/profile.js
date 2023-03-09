const express = require("express");
const { Buffer } = require("buffer");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/picture/save", authController.verifyToken, (req, res) => {
  const { email, id } = req.decodedToken;
  const { imageBase64 } = req.body;


  const buffer = Buffer.from(imageBase64.split(",")[1], "base64");

  console.log("buffer is :", buffer);

});

module.exports = router;
