const UsersServices = require('../services/users.services');
const bcrypt = require('bcrypt');

const authUser = async(req, res, next) => {
    try {
        const user = await UsersServices.getUser(req.body);

        if(!user){
            return next({
                status: 400,
                message: "Algun dato es incorrecto",
                error: 'User not found'
            });
        };

        const isValid = await bcrypt.compare(req.body.password, user.password);

        if(!isValid){
            return next({
                status: 400,
                message: 'Algun dato es incorrecto',
                error: 'User not found'
            });
        };


        const {id, email, firstname, lastname, username} = user;
        
        res.status(200).json({
            id,
            email,
            firstname,
            lastname,
            username
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    authUser
}