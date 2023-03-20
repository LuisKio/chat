const Users = require('./users.models');
const Conversations = require('./conversations.models');
const Messages = require('./messages.models');
const conversationsusers = require('./userconversation.models');

const initModels = () => {
    // ! HASMANY UNO A UNO
    // ! BELONGSTO UNO A MUCHOS
    
 /*   Users.hasMany(Conversations, {foreignKey: "owner"});
    Conversations.belongsTo(Users, {foreignKey: "owner"});
*/
  
    Users.hasMany(Messages, {foreignKey: "owner"});
    Messages.belongsTo(Users, {foreignKey: "owner"});

    Conversations.hasMany(Messages, {foreignKey: "conversation_id"});
    Messages.belongsTo(Conversations, {foreignKey: "conversation_id"});

    Users.belongsToMany(Conversations, {through: conversationsusers, foreignKey: "userId"});
    Conversations.belongsToMany(Users, {through: conversationsusers, foreignKey: "conversationId"});
};

module.exports = initModels;