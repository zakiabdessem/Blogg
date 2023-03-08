const express = require("express");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.post("/picture/save",authController.verifyToken, (req, res) => {
  const buffer = req.body;
  const decodedToken = req.decodedToken;
  console.log("decoded token is :", decodedToken);
  console.log("buffer is :", buffer);
  res.status(200);
});

module.exports = router;
