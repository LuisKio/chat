const { 
    ValidationError,
    DatabaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError,
    UniqueConstraintError
} = require('sequelize');

const logError = (err, req, res, next) => {
    console.log(err);
    next(err);
};

const ormErrorHandler = (err, req, res, next) => {
    if(
        err instanceof ConnectionError ||
        err instanceof ConnectionAcquireTimeoutError ||
        err instanceof ConnectionRefusedError ||
        err instanceof ConnectionTimedOutError ||
        err instanceof InvalidConnectionError 
    ) {
        return res.status(409).json({
            name: err.name,
            message: "Database connection error"
        });
    }

    if( err instanceof ValidationError){
        return res.status(409).json({
            name: err.name,
            message: err.message,
            errors: err.errors
        });
    };

    if(err instanceof DatabaseError){
        return res.status(409).json({
            name: err.name,
            message: err.message,
            errors: err.errors,
            params: err["parameters"]
        });
    };    

    next(err);
};

const errorHandler = (err, req, res, next) => {
    let {status} = err;

    return res.status(status || 500).json({
        message: err.message,
        errorName: err.name
    });
};

module.exports = {
    logError,
    errorHandler,
    ormErrorHandler
};

