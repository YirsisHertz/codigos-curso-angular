const express = require("express");
const cors = require("cors");
const conexionDB = require("./db/config");

const authRouter = require("./routes/auth");
const taskRouter = require("./routes/tareas");

const app = express();
require("dotenv").config();

conexionDB();

app.use(express.json());
app.use(cors());

app.use("/", express.static(__dirname + "/public"));
app.use("/auth", authRouter);
app.use("/task", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`aplicacion corriendo en el puerto ${process.env.PORT}`);
});
