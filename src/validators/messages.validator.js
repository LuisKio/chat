const {check} = require('express-validator');
const validateResult = require('./validate');

const createMessageValidator = [
    check('content', 'El campo no debe de estar vacio')
        .notEmpty()
        .exists(),
    
    (req, res, next) => {
        validateResult(req, res, next);
    }
];

module.exports = {
    createMessageValidator
}