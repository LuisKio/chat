const Messages = require('../models/messages.models');

class MessagesServices { 
    static async create(data){
        try {
            const result = await Messages.create(data);

            return result;
        } catch (err) {
            throw(err)
        };
    };
};


module.exports = MessagesServices;