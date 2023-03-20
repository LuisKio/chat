const Conversations = require('../models/conversations.models');
const Users = require('../models/users.models');
const conversationsusers = require('../models/userconversation.models');
const Messages = require('../models/messages.models');

class ConversationsServices {
    static async create({ title}) {
        try {
            const result = await Conversations.create({title});
            return result;
        } catch (err) {
            throw (err);
        };
    };


    static async addUser(users) {
        try {
            const result = await conversationsusers.bulkCreate(users);
            return result;
        } catch (err) {
            throw (err)
        };
    };

    static async getConversationsByUser(id) {
        try {
            const dataConversations = await Conversations.findAll({
                include: {
                    model:  Users,
                    where: {
                        id
                    },
                    attributes: ["username", "email"]
                },
                attributes: ["title"]
            });

            return dataConversations;
        } catch (err) {
            throw (err);
        }
    }


    static async getConversationById(id){
        try {
            const dataConversation = await Conversations.findAll({
                where: {
                    id
                },
                include: [
                    {
                        model: Users,
                        attributes: ["username"]
                    },
                    {
                        model: Messages,
                        attributes: ["content"],
                        include: {
                            model: Users,
                            attributes: ["username"]
                        }
                    },
                ],
                attributes: ["title"]
            });

            return dataConversation;
        } catch (err) {
            throw(err);
        }
    }

    static async dropConversation(id){
        try {
            const result = Conversations.destroy({
                where: {id}
            });

            return result;
        } catch (err) {
            throw(err)
        }
    }
};

module.exports = ConversationsServices;