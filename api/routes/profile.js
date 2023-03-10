const express = require("express");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/picture/save", authController.verifyToken, (req, res) => {
  const { email, id } = req.decodedToken;
  const { imageURL } = req.body;

  console.log(`email: ${email}, imageURL${imageURL}`)


});

module.exports = router;
