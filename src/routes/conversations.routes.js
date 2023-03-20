const {Router} = require('express');
const {coupleConversation, groupConversation, getConversations, getConversation, deleteGroup} = require('../controllers/conversations.controller');

const router = Router();

router.post('/api/v1/conversation/couple/', coupleConversation);

router.post('/api/v1/conversation/group/', groupConversation)

router.get('/api/v1/conversations/:id', getConversations);

router.get('/api/v1/conversation/:id', getConversation);

router.delete('/api/v1/conversation/:id', deleteGroup);


module.exports = router;

