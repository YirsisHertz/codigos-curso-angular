const { Router } = require("express");
const { check } = require("express-validator");
const {
  registerUsuario,
  loginUsuario,
} = require("../controllers/authController");
const validationErrors = require("../middlewares/validationErrors");

const authRouter = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Usuario:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          description: Este es el nombre de usuario
 *        email:
 *          type: string
 *          description: Este es el correo electronico
 *        password:
 *          type: string
 *          description: Esta es la contraseña que ademas se encripta con BCrypt (una sola vía), Necesita minimo ser de 6 caracteres
 *      required:
 *        - username
 *        - email
 *        - password
 *      example:
 *        username: Yirsis Serrano
 *        email: yirsis@mail.com
 *        password: password123
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Registra un nuevo usuario
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Usuario'
 *    responses:
 *      501:
 *        description: Correo ya registrado
 *      200:
 *        description: Usuario creado correctamente y retornado con JWT (Token)
 */
authRouter.post(
  "/register",
  [
    check("email", "El formato es invalido").isEmail(),
    check(
      "password",
      "La contraseña tiene que ser de 6 caracteres como minimo"
    ).isLength({ min: 6 }),
    check("username", "El nombre de usuario es requerido").not().isEmpty(),
    validationErrors,
  ],
  registerUsuario
);

/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Iniciar sesión de un usuario con un Token valido
 *    tags: [Usuario]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *               type: string
 *               description: Este es el correo electronico
 *              password:
 *                type: string
 *                description: Esta es la contraseña que ademas se encripta con BCrypt (una sola vía), Necesita minimo ser de 6 caracteres
 *            required:
 *              - username
 *              - email
 *              - password
 *            example:
 *              email: yirsis@mail.com
 *              password: password123
 *    responses:
 *      401:
 *        description: Correo o contraseña invalidos
 *      200:
 *        description: Usuario ingresado correctamente y retornado un JWT (Token) Nuevo y Valido
 */
authRouter.post(
  "/login",
  [
    check("email", "El formato es invalido").isEmail(),
    check(
      "password",
      "La contraseña tiene que ser de 6 caracteres como minimo"
    ).isLength({ min: 6 }),
    validationErrors,
  ],
  loginUsuario
);

module.exports = authRouter;
