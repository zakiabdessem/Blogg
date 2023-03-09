const express = require("express");
const { Buffer } = require("buffer");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/picture/save", authController.verifyToken, (req, res) => {
  const { email, id } = req.decodedToken;
  const { imageBlob } = req.body;


  const buffer = Buffer.from(imageBlob.split(",")[1], "blob");

  console.log("buffer is :", buffer);

});

module.exports = router;
