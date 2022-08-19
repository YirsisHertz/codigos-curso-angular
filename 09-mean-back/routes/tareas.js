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

/**
 * @swagger
 * components:
 *  schemas:
 *    Tarea:
 *      type: object
 *      properties:
 *        nombre:
 *          type: string
 *          description: Este es el nombre de la Tarea
 *        creator:
 *          type: Usuario
 *          description: Este es el ID del usuario
 *        createdAt:
 *          type: date
 *          description: Esta es la fecha de creación
 *      required:
 *        - nombre
 *        - creator
 *      example:
 *        nombre: Aplicación con Laravel
 *        creator: 62ff2c37c8f68597ccccf976
 */

/**
 * @swagger
 * /task/read:
 *  get:
 *    summary: Lee todas las tareas
 *    tags: [Tarea]
 *    parameters:
 *      - name: x-auth-token
 *        in: header
 *        description: JWT Token Valido
 *        required: true
 *        type: string
 *    requestBody:
 *      required: false
 *    responses:
 *      404:
 *        description: El usuario no tiene Tareas visibles
 *      200:
 *        description: Listado de tareas del usuario logeado
 */
router.get("/read", [verifyToken], readTarea);

/**
 * @swagger
 * /task/create:
 *  post:
 *    summary: Crea una nueva tarea
 *    tags: [Tarea]
 *    parameters:
 *      - name: x-auth-token
 *        in: header
 *        description: JWT Token Valido
 *        required: true
 *        type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *               type: string
 *               description: El nombre de la tarea
 *    responses:
 *      200:
 *        description: La tarea se creo correctamente
 */
router.post(
  "/create",
  [
    check("nombre", "Nombre del proyecto obligatorio").not().isEmpty(),
    validationErrors,
    verifyToken,
  ],
  createTarea
);

/**
 * @swagger
 * /task/update/{id}:
 *  put:
 *    summary: Actualizar una tarea
 *    tags: [Tarea]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id de la tarea por actualizar
 *        required: true
 *        type: string
 *      - name: x-auth-token
 *        in: header
 *        description: JWT Token Valido
 *        required: true
 *        type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              nombre:
 *               type: string
 *               description: El nuevo nombre de la tarea
 *    responses:
 *      404:
 *        description: La tarea que tratas de actualizar no existe
 *      200:
 *        description: La tarea se actualizo correctamente
 */
router.put(
  "/update/:id",
  [
    check("nombre", "Nombre del proyecto obligatorio").not().isEmpty(),
    validationErrors,
    verifyToken,
  ],
  updateTarea
);

/**
 * @swagger
 * /task/delete/{id}:
 *  delete:
 *    summary: Eliminar una tarea
 *    tags: [Tarea]
 *    parameters:
 *      - name: id
 *        in: path
 *        description: Id de la tarea por eliminar
 *        required: true
 *        type: string
 *      - name: x-auth-token
 *        in: header
 *        description: JWT Token Valido
 *        required: true
 *        type: string
 *    requestBody:
 *      required: false
 *    responses:
 *      404:
 *        description: La tarea que tratas de eliminar no existe
 *      200:
 *        description: La tarea se elimino correctamente
 */
router.delete("/delete/:id", [verifyToken], deleteTarea);

module.exports = router;
