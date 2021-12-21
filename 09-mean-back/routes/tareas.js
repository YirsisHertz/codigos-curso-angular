const { Router } = require("express");
const { check } = require("express-validator");
const {
  createTarea,
  readTarea,
  updateTarea,
  deleteTarea,
} = require("../controllers/tareaController");
const validationErrors = require("../middlewares/validationErrors");
const verifyToken = require("../middlewares/verifyToken");

const router = Router();

router.post(
  "/create",
  [
    check("nombre", "Nombre del proyecto obligatorio").not().isEmpty(),
    validationErrors,
    verifyToken,
  ],
  createTarea
);

router.get("/read", [verifyToken], readTarea);

router.put(
  "/update/:id",
  [
    check("nombre", "Nombre del proyecto obligatorio").not().isEmpty(),
    validationErrors,
    verifyToken,
  ],
  updateTarea
);

router.delete("/delete/:id", [verifyToken], deleteTarea);

module.exports = router;
