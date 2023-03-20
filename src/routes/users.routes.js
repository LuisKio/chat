const {Router} = require('express');
const {createUser, getAllUsers} = require('../controllers/users.controllers');
const {createUsersValidator} = require('../validators/users.validator');

const router = Router();

router.post('/api/v1/users', createUsersValidator, createUser);

router.get('/api/v1/users', getAllUsers);

module.exports = router;