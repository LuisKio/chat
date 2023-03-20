const UsersServices = require('../services/users.services');
const bcrypt = require('bcrypt');

const createUser = async(req, res, next) => {
    try {
        const newUser = req.body;

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(newUser.password, salt);
        newUser.password = hash;

        await UsersServices.create(newUser);

        res.status(201).json({
            message: 'User created successfully'
        });
    } catch (err) {
        next(err);
    };
};

const getAllUsers = async(req, res, next) => {
    try {
        const users = await UsersServices.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        next(err)
    };
};

module.exports = {
    createUser,
    getAllUsers
};