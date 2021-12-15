const { Router } = require("express");
const { createTarea } = require("../controllers/tareaController");

const router = Router();

router.post("/create", createTarea);

module.exports = router;
