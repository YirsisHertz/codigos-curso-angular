const Tarea = require("../models/tarea");

const createTarea = async (req, res) => {
  const { nombre } = req.body;
  const id = req.uid;

  const nuevaTarea = new Tarea({ nombre, creator: id });

  await nuevaTarea.save();

  res.status(200).json({
    ok: true,
    msg: "Tarea Creada",
    nuevaTarea,
  });
};

const readTarea = async (req, res) => {
  const id = req.uid;

  try {
    const tareas = await Tarea.find({ creator: id }).sort({ createdAt: -1 });

    return res.json({
      ok: true,
      tareas,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Tareas no encontradas",
    });
  }
};

const updateTarea = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const tarea = await Tarea.findByIdAndUpdate(id, { nombre }, { new: true });

    return res.json({
      ok: true,
      msg: "Tarea actualizada",
      tarea,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Tarea no actualizada",
    });
  }
};

const deleteTarea = async (req, res) => {
  const { id } = req.params;

  try {
    const tarea = await Tarea.findByIdAndRemove(id);

    return res.json({
      ok: true,
      msg: "Tarea eliminada",
      tarea,
    });
  } catch (error) {
    return res.status(404).json({
      ok: false,
      msg: "Tarea no eliminada",
    });
  }
};

module.exports = { createTarea, readTarea, updateTarea, deleteTarea };
