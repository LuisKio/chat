const Users = require('../models/users.models');

class UsersServices {
    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (err) {
            throw(err);
        }
    };

    static async getAllUsers() {
        try {
            const result = await Users.findAll({
                attributes: ['id', 'username', 'email']
            });
            return result;
        } catch (err) {
            throw(err);
        }
    }

    static async getUser({email}){
        try {
            const result = await Users.findOne({
                where: {
                    email
                }
            });
            return result;
        } catch (err) {
            throw(err)
        }
    }
}


module.exports = UsersServices;