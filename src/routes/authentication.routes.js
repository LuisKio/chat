const {Router} = require('express');
const {authenticatorValidator} = require('../validators/authentication.valitador');
const {authUser} = require('../controllers/authentication.controllers');

const router = Router();

router.post('/api/v1/auth', authenticatorValidator, authUser);

module.exports = router;