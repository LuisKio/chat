const {check} = require('express-validator');
const validateResult = require('./validate');

const authenticatorValidator = [
    check('email', 'El email no debe de estar vacio')
        .notEmpty()
        .exists().withMessage('El email es requerido')
        .isEmail().withMessage('El email es invalido'),
    
    check('password', 'Contraseña incorrecta')
        .notEmpty()
        .isLength({min: 6}),

    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    authenticatorValidator
}