const Tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const { nombre } = req.body;

  const nuevaTarea = new Tarea({ nombre });

  await nuevaTarea.save();

  res.status(200).json({
    ok: true,
    msg: "Tarea Creada",
  });
};

module.exports = { createTarea };
