const {Router} = require('express');
const {createMessageValidator} = require('../validators/messages.validator');
const {createMessage} = require('../controllers/message.controllers');

const router = Router();

router.post('/api/v1/message', createMessageValidator, createMessage);

module.exports = router;