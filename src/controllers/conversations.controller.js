const ConversationsServices = require('../services/conversations.services');

const coupleConversation = async (req, res, next) => {
    try {
        const data = req.body;
        const dataConversation = await ConversationsServices.create(data);

        const users = [{
            userId: data.owner,
            conversationId: dataConversation.id,
            owner: true

        },{
            userId: data.guest,
            conversationId: dataConversation.id}
        ];

        await ConversationsServices.addUser(users);


        res.status(201).json({
            message: 'Group created successfully'
        });
    } catch (err) {
        next(err);
    }
};


const groupConversation = async(req, res, next) => {
    try {
        const dataUsers = [];
        const data = req.body;
        const dataConversation = await ConversationsServices.create(data);
       
        data.guests.forEach(element => {
            dataUsers.push({
                userId: element,
                conversationId: dataConversation.id
            });
        });

        dataUsers.push({
            userId: data.owner,
            conversationId: dataConversation.id,
            owner: true
        });

        await ConversationsServices.addUser(dataUsers);

        

        res.status(201).json({
            message: 'Group created successfully'
        });
    } catch (err) {
        next(err);
    };
};

const getConversations = async(req, res, next) => {
    try {
        const {id} = req.params;
        const groups = await ConversationsServices.getConversationsByUser(id);
        res.status(200).json(groups);
    } catch (err) {
        next(err);
    }
}

const getConversation = async(req, res, next) => {
    try {
        const {id} = req.params;
        const group = await ConversationsServices.getConversationById(id);

        res.status(200).json(group);
    } catch (err) {
        next(err)
    }
}

const deleteGroup = async(req, res, next) => {
    try {
        const {id} = req.params;
        const resultDrop = await ConversationsServices.dropConversation(id);

        res.status(200).json({
            message: 'deleted group'
        });
    } catch (err) {
        next(err);
    }
}

module.exports = {
    coupleConversation,
    groupConversation,
    getConversations,
    getConversation,
    deleteGroup
};