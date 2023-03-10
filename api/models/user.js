const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 4,
    maxLength: 70,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_pic:{
    type: String,
    default: "https://res-console.cloudinary.com/dlua23dqn/thumbnails/transform/v1/image/upload//v1678448412/U2NyZWVuc2hvdF8zX2kzbnRsZA==/drilldown",
    required: true
  }
});
module.exports = mongoose.model("user", userSchema);
