const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/UsersController');

router.get('/userConsult', UsersController.consult);
router.post('/userCreate',UsersController.create);

module.exports = router;