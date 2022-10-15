const express = require('express');
const router = express.Router();
const routes = required('./routes/router');
const { createUser } = require('../controllers/user');


// User route
router.post('/user', createUser);


module.exports = router;