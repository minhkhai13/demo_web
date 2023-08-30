const express = require('express');
const router = express.Router();
const loginCOntroller = require('../app/controllers/LogInController');
router.get('/login',loginCOntroller.login);
module.exports = router;