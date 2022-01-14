const mongoose = require("mongoose");

const conexionDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);

    console.log("Conectado a DB");
  } catch (error) {
    console.log("error al conectar");
  }
};

module.exports = conexionDB;
