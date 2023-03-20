const { check } = require('express-validator');
const validateResult = require('./validate');

const createUsersValidator = [
    check('username', 'El nombre de usuario no debe de estar vacio')
        .notEmpty()
        .exists().withMessage('El nombre de usuario es requerido')
        .isString().withMessage('El nombre de usuario debe de ser un cadena de caracteres')
        .isLength({ min: 3 }).withMessage('El usuario debe de tener mas de tres caracteres'),

    check('email', 'El email no debe de estar vacio')
        .notEmpty()
        .exists().withMessage('El email es requerido')
        .isEmail().withMessage('El email tiene un formato invalido'),
    
    check('password', 'La contraseña es requerida')
        .notEmpty()
        .isLength({min: 6}).withMessage('La contraseña debe de tener mas de seis caracteres'),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    createUsersValidator
};