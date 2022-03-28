const express = require('express');

const routes = require('../constants/routes');
const authHandlers = require('../modules/user');

const router = new express.Router();

router.post(routes.AUTH.SIGN_UP, authHandlers.signUp);
router.post(routes.AUTH.SIGN_IN, authHandlers.signIn);

module.exports = router;
