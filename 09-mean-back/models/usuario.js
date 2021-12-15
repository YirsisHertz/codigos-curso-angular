const { Schema, model } = require("mongoose");

const usuario = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = model("Usuario", usuario);
